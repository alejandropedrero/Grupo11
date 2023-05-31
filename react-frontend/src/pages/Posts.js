import React, { useState, useEffect } from "react";
import NavbarAlt from "../components/NavbarAlt";
import PostItem from "../components/PostItem";
import "../App.css";

const Posts = () => {
  const [userId, setUserId] = useState("");
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([]);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };

    const postDate = new Date(dateString);
    return postDate.toLocaleString("es-ES", options);
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-User-Id": userId,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserId(userId);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    fetch("http://localhost:3001/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const formattedPosts = data.map((post) => ({
          ...post,
          post_date: formatDate(post.post_date),
        }));
        setPosts(formattedPosts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const handlePostTextChange = (event) => {
    setPostText(event.target.value);
  };

  const handlePostSubmit = () => {
    const requestBody = {
      text: postText,
    };

    fetch("http://localhost:3001/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-User-Id": userId,
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        const newPost = {
          id: data.postId,
          text: data.text,
          post_date: formatDate(data.post_date),
          userName: data.userName,
        };

        setPosts((prevPosts) => [newPost, ...prevPosts]);
        setPostText("");
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  return (
    <div>
      <NavbarAlt />
      <main className="container" id="outclick">
        <div className="row container mt-5 my-5">
          <div className="col-lg-6 px-0">
            <h1 className="display-4 fw-bold">
              Descubre qué postean los usuarios
            </h1>
            <p className="lead my-3">
              Quizá no sea nada interesante, o tal vez te sorprenda
            </p>
          </div>
          <div className="col d-none d-lg-block">
            <img src="cover-4.png" alt="Conecta" className="img-fluid" />
          </div>
        </div>
        {/* GRID BOOTSTRAP APLICADO PARA EL CONTENIDO PRINCIPAL */}
        <div className="row container m-0 p-0">
          {/* DIV 1 - IZQUIERDA */}
          <div className="col col-md-1 col-lg-2 d-none d-md-block p-0 ms-auto">
            {/* DIV 1.1 */}
            <div className="d-flex flex-column justify-content-center align-items-center h-20 p-lg-3 mb-3 border rounded-3">
              <h3>Explora</h3>
              <div className="row d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-youtube col-lg-6 p-0"
                  width={48}
                  height={48}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#79C7C7"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x={3} y={5} width={18} height={14} rx={4} />
                  <path d="M10 9l5 3l-5 3z" />
                </svg>
                <div className="col-6 p-lg-2 d-none d-lg-block">Tutoriales</div>
              </div>
              <div className="row d-flex justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-youtube col-lg-6 p-0"
                  width={48}
                  height={48}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#79C7C7"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x={3} y={5} width={18} height={14} rx={4} />
                  <path d="M10 9l5 3l-5 3z" />
                </svg>
                <div className="col-6 p-lg-2 d-none d-lg-block">Exámenes</div>
              </div>
            </div>
          </div>
          {/* DIV 2 - MEDIO */}
          <div className="col-md-10 col-lg-7 col-xl-8container" id="contenido">
            {/* DIV 2.1 PUBLICACIÓN */}
            <section className="container m-0 p-0 rounded-3">
              <div className="container-fluid bg-light border rounded mb-2">
                <div className="d-flex align-items-center mt-3 mb-1">
                  <a href="/profile">
                    <img
                      src={`${process.env.PUBLIC_URL}/img-users/${userId}.jpg`}
                      alt="User profile"
                      width="40px"
                      height="40px"
                      className="m-2 user-profile-picture rounded-circle"
                      title="ir a tu perfil"
                    />
                  </a>
                  <h3 className="mb-0">Nueva publicación</h3>
                </div>
                <div className="row">
                  <div id="post">
                    <div className="mb-2">
                      <textarea
                        className="form-control text-align"
                        rows={5}
                        id="comment"
                        name="text"
                        placeholder="¿Qué te cuentas?"
                        value={postText}
                        onChange={handlePostTextChange}
                      />
                    </div>
                    <button
                      className="btn btn-success btn-block mb-2 btn-general"
                      id="post-button"
                      onClick={handlePostSubmit}
                    >
                      Publicar
                    </button>
                  </div>
                </div>
              </div>
              <div className="container m-0 p-0">
                <div id="publicaciones-container" className="container m-0 p-0">
                  {posts.map((post) => (
                    <PostItem
                      key={post.id}
                      id={post.id}
                      text={post.text}
                      postDate={post.post_date}
                      userName={post.userName}
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>
          {/* DIV 3 - DERECHA */}
          <div className="col d-none d-lg-block p-0">
            <div className="h-20 p-3 border rounded-3">
              <div className="titulos">
                <h3>Red</h3>
              </div>
              <div className="d-flex mb-2">
                <img
                  src="../img/gal-gadot.webp"
                  alt="Foto Gal Gadot"
                  width="50px"
                  height="50px"
                  className="rounded-5"
                />
                <p className="my-auto ms-2">Gal Gadot</p>
              </div>
              <div className="d-flex mb-2">
                <img
                  src="../img/frodo.jpg"
                  alt="Foto de Lucia"
                  width="50px"
                  height="50px"
                  className="rounded-5"
                />
                <p className="my-auto ms-2">Frodo Bolsón</p>
              </div>
              <div className="d-flex mb-2">
                <img
                  src="../img/pedro.png"
                  alt="Foto de Pedro"
                  width="50px"
                  height="50px"
                  className="rounded-5"
                />
                <p className="my-auto ms-2">Benji Wallace</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Posts;

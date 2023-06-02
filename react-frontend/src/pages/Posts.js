import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarAlt from "../components/NavbarAlt";
import PostItem from "../components/PostItem";
import "../App.css";

const Posts = () => {
  const [userId, setUserId] = useState("");
  const [userProfilePicture, setUserProfilePicture] = useState("");
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([]);
  const [quoteText, setQuoteText] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [dogImageUrl, setDogImageUrl] = useState("");
  const [likedPosts, setLikedPosts] = useState([]);

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
    fetchUserData();
    fetchPosts();
    fetchRandomQuote();
    fetchRandomDog();
  }, []);

  const fetchUserData = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const userResponse = await fetch(
        `http://localhost:3001/users/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-User-Id": userId,
          },
        }
      );
      const userData = await userResponse.json();
      setUserId(userId);
      setUserProfilePicture(userData.profile_picture);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchPosts = async () => {
    try {
      const postsResponse = await fetch("http://localhost:3001/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const postsData = await postsResponse.json();

      const formattedPosts = await Promise.all(
        postsData.map(async (post) => {
          const userResponse = await fetch(
            `http://localhost:3001/users/${post.user_id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const userData = await userResponse.json();

          return {
            ...post,
            post_date: formatDate(post.post_date),
            userName: userData.name,
            imageUrl: userData.profile_picture,
          };
        })
      );

      setPosts(formattedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      const { content, author } = response.data;
      setQuoteText(content);
      setQuoteAuthor(author);
    } catch (error) {
      console.error("Error fetching random quote:", error);
    }
  };

  const fetchRandomDog = async () => {
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      const { message } = response.data;
      setDogImageUrl(message);
    } catch (error) {
      console.error("Error fetching random dog:", error);
    }
  };

  const handlePostTextChange = (event) => {
    setPostText(event.target.value);
  };

  const handlePostSubmit = async () => {
    try {
      const requestBody = {
        text: postText,
      };

      const createPostResponse = await fetch("http://localhost:3001/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-User-Id": userId,
        },
        body: JSON.stringify(requestBody),
      });

      const createdPostData = await createPostResponse.json();

      const userResponse = await fetch(
        `http://localhost:3001/users/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const userData = await userResponse.json();

      const newPost = {
        id: createdPostData.id,
        user_id: userId,
        text: postText,
        post_date: formatDate(createdPostData.post_date),
        userName: userData.name,
        imageUrl: userProfilePicture,
        num_likes: 0,
      };

      setPosts((prevPosts) => [newPost, ...prevPosts]);
      setPostText("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleQuoteButtonClick = () => {
    fetchRandomQuote();
  };

  const handleDogButtonClick = () => {
    fetchRandomDog();
  };

  const handleLike = async (postId) => {
    if (likedPosts.includes(postId)) {
      return;
    }

    try {
      const userId = localStorage.getItem("userId");
      const response = await fetch(
        `http://localhost:3001/posts/${postId}/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-User-Id": userId,
          },
        }
      );

      if (response.ok) {
        setLikedPosts((prevLikedPosts) => [...prevLikedPosts, postId]);
        fetchPosts();
      } else {
        console.error("Error liking post:", response.status);
      }
    } catch (error) {
      console.error("Error liking post:", error);
    }
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
              Tal vez te sorprenda, o quizá no sea nada interesante
            </p>
          </div>
          <div className="col d-none d-lg-block">
            <img src="cover-4.png" alt="Conecta" className="img-fluid" />
          </div>
        </div>
        {/* Main */}
        <div className="row container m-0 p-0">
          {/* Div Izquierda - Fetch Random Quote */}
          <div className="card col col-md-1 col-lg-2 d-none d-md-block p-0 ms-auto custom-card">
            <div className="card-body">
              <h5 className="card-title">Frase del día</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary quote-author">
                {quoteAuthor}
              </h6>
              <p className="card-text quote-text text-muted">{quoteText}</p>
              <button
                className="card-link quote-generator btn btn-outline-dark small"
                onClick={handleQuoteButtonClick}
              >
                Dame otra
              </button>
            </div>
          </div>

          {/* DIV 2 - MEDIO */}
          <div className="col-md-10 col-lg-7 col-xl-8 container" id="contenido">
            {/* DIV 2.1 PUBLICACIÓN */}
            <section className="container m-0 p-0 rounded-3">
              <div className="container-fluid bg-light border rounded mb-4">
                <div className="d-flex align-items-center mt-3 mb-1">
                  <a href="/profile">
                    <img
                      src={userProfilePicture}
                      alt="User profile"
                      width="40px"
                      height="40px"
                      className="m-2 user-profile-picture rounded-circle"
                      title="ir a tu perfil"
                    />
                  </a>
                  <h4 className="mb-0">Nueva publicación</h4>
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
                      text={post.text}
                      postDate={post.post_date}
                      userName={post.userName}
                      userId={post.user_id}
                      imageUrl={post.imageUrl}
                      numLikes={post.num_likes}
                      handleLike={() => handleLike(post.id)}
                      liked={likedPosts.includes(post.id)}
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>
          {/* DIV 3 - DERECHA */}
          <div className="card col col-md-1 col-lg-2 d-none d-md-block p-0 ms-auto custom-card">
            <div className="card-body d-flex flex-column align-items-center">
              <h5 className="card-title">Perro del día</h5>
              <div className="image-wrapper">
                <img
                  src={dogImageUrl}
                  alt="Random Dog"
                  className="card-img-top mb-4"
                />
              </div>
              <button
                className="card-link quote-generator btn btn-outline-dark small"
                onClick={handleDogButtonClick}
              >
                Otro
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Posts;

import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/posts");
  };

  return (
    <>
      <h1>No puedes pasar</h1>
      <button
        onClick={handleButton}
        className="btn-navbar btn rounded-5 btn-general mb-3"
        style={{
          backgroundColor: "palevioletred",
        }}
        type="submit"
      >
        Volver a posts
      </button>
    </>
  );
}

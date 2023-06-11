import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/");
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "lightgrey" }}
    >
      <div className="text-center">
        <h1>404 pero puedes volver, te dejamos esta vez...</h1>
        <button
          onClick={handleButton}
          className="btn rounded-5 btn-general m-4"
          type="button"
          style={{
            backgroundColor: "palevioletred",
          }}
        >
          Volver
        </button>
      </div>
    </div>
  );
}

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function TicketForm() {
  const {

    formState: { errors },
  } = useForm();
  // const onSubmit = async (data) => {
  // console.log(JSON.stringify(data))

  const [inputValues, setInputValues] = useState({
    titulo: "",
    consulta: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault(event);
    const result = await fetch("http://localhost:3001/ticket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titulo: inputValues.titulo,
        consulta: inputValues.consulta,
      }),
    });
    const resultInJson = await result.json();
    console.log(resultInJson);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="container col-lg-6 me-8 sm-6 border">
        <div
          className="row p-2 text-white"
          style={{ backgroundColor: "palevioletred" }}
        >
          <div className="col-lg-11">
            <h3>¿Necesitas ayuda?</h3>
          </div>
          <div className="col-lg-1">
            <h3>x</h3>
          </div>
        </div>
        <div className="m-3">
          <label className="form-label">
            <strong>Título</strong>
          </label>
          <input
            type="text"
            id="titulo"
            className="form-control"
            placeholder="Sintetice su idea"
            required
            value={inputValues.titulo}
            onChange={handleInputChange}
          />
          {errors.titulo?.type === "required" && (
            <p style={{ color: "red" }}>Título requerido</p>
          )}
        </div>
        <div className="m-3">
          <label className="form-label">
            <strong>Consulta</strong>
          </label>
          <textarea
            type="text"
            id="consulta"
            className="form-control"
            placeholder="Cuéntanos en detalle cuál es la dificultad que te has encontrado"
            style={{ height: "200px" }}

            value={inputValues.consulta}
            onChange={handleInputChange}
          />
          {errors.consulta?.type === "required" && (
            <p style={{ color: "red" }}>
              Consulta requerida para poder ayudarte
            </p>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-lg rounded-pill m-3"
          style={{ backgroundColor: "#79c7c7", color: "white" }}
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

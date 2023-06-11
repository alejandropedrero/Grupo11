import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";
import NavbarAlt from "../components/NavbarAlt";

export default function TicketForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [modal, setModal] = useState(false);

  const onSubmit = async (data) => {
    console.log(JSON.stringify(data));

    try {
      const token = localStorage.getItem("token");
      const result = await fetch("http://localhost:3001/ticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          titulo: data.titulo,
          consulta: data.consulta,
        }),
      });

      const resultInJson = await result.json();
      console.log(resultInJson);

      setModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleModal = () => {
    setModal(false);
  };

  return (
    <>
      <NavbarAlt />
      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        <div className="container col-lg-6 me-6 sm-6 border">
          <div
            className="container p-2 text-white"
            style={{ backgroundColor: "palevioletred", width: "100%" }}
          >
            <div className="col-lg-12">
              <h3>¿Necesitas ayuda?</h3>
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
              placeholder="Sintetiza tu idea"
              {...register("titulo", {
                required: true,
              })}
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
              {...register("consulta", {
                required: true,
              })}
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

      <Modal show={modal} onHide={handleModal}>
        <Modal.Header>
          <Modal.Title>¡Ticket registrado!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button
            className="rounded-pill"
            style={{ backgroundColor: "palevioletred", color: "white" }}
            onClick={handleModal}
          >
            Cerrar
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}

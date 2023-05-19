import React from "react";
import React, { useEffect } from "react";

// export default function createTicket() {
// useEffect(() => {
//     const handleSubmit = async (event) => {
//       event.preventDefault();

//       const titulo = document.getElementById("titulo").value;
//       const consulta = document.getElementById("consulta").value;

//       try {
//         const response = await fetch("http://localhost:3001/ticket", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ titulo, consulta }),
//         });

//         if (response.ok) {
//           console.log("Ticket creado");
//         } else {
//           const errorMessage = await response.text();
//           console.error(errorMessage);
//           errorContainer.innerHTML = "Error en el ticket";
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };

//     const titulo = document.getElementById("titulo");
//     const consulta = document.getElementById("consulta");

//     // Agregar event listener al formulario para manejar el submit
//     const form = document.getElementById("ticketForm");
//     form.addEventListener("submit", handleSubmit);

//     // Limpia el formulario después de enviarlo
//     return () => {
//       form.removeEventListener("submit", handleSubmit);
//     };
//   }, []);
// }


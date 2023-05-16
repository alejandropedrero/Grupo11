import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";
import logo192 from "../logo192.png";

export function CardFriend() {
  return (
    <Card className="card-friend text-center">
      <Card.Img variant="top" src={logo192} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="light">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

// Formato de tarjeta amigo original del frontend

//   <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
//     <div class="card">
//       <img src="../img/${friend.profile_picture}" class="card-img-top w-25 h-25 rounded-circle mx-auto object-fit-cover mt-3" alt="...">
//       <div class="card-body d-flex flex-column justify-content-center align-items-center">
//         <h5 class="card-title persona-name">${friend.name}</h5>
//         <p class="persona-email">${friend.email}</p>
//         <a href="#" class="btn btn-light" id="add-friend-btn">Eliminar amigo</a>
//       </div>
//     </div>
//   </div>

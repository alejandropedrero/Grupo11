import  Login  from "./components/Login";
import { BrowserRouter, Route } from 'react-router-dom';
import TicketForm from './components/TicketForm';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/ticket-form" component={TicketForm} />
      </div>
    </BrowserRouter>
  );
}

export default App;
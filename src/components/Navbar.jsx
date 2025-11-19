import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar">
      <div>
        <Link to="/">Accueil</Link> 
        <Link to="/Contact">Contact</Link>
      </div>
      <h2>Films du moment</h2>
    </nav>
);
}
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar">
      <div class="logo">
        <p>CineVerse</p>
      </div>

      <div class="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </nav>
  );
}

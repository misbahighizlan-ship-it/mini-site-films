import { useParams, Link } from "react-router-dom";
import movies from "../data/movies";


function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p>Film introuvable.</p>;

  return (
    <div class="details-container">
      <img src={movie.image} alt={movie.title} />

      <h1>{movie.title}</h1>
      <p><strong>Année :</strong> {movie.year}</p>

      <h3>Description</h3>
      <p>{movie.description}</p>

      <h3>Équipe</h3>
      <ul>
        {movie.team.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>

      <Link to="/" class="back-btn">← Retour</Link>
    </div>
  );
}

export default MovieDetails;
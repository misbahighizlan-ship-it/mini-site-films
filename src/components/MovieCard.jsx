import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} class="movie-card">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
    </Link>
  );
}  

export default MovieCard;






import MovieCard from "../components/MovieCard";
import movies from "../data/movies";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="home-container">
      {movies.map((movie) => (
        <Link key={movie.id} to={"/MovieDetails/${movie.id}"}>
          <img src={movie.image} alt={movie.title} class="movie-card"/>
        </Link>
      ))}
    </div>
  );
}

export default Home;

import MovieCard from "../components/MovieCard";
import movies from "../data/movies";
import { Link } from "react-router-dom";
import bannerImg from "../assets/photos/listes-10-clichés-affiches-film.jpg";

function Home() {
  return (
    <div class="home">
      <div class="banner">
        <img src={bannerImg} alt="banner" class="banner-img" />
        <h1 class="banner-title">Films du Moment</h1>
        <p class="banner-subtitle">
          Meilleurs Site Pour Regarder Des Films en Entier Gratuitement</p>
      </div>
        
    <div class="home-container">
      {movies.map((movie) => ( 
          <Link key={movie.id} to={`/movie/${movie.id}`} class="movie-item">
            <div class="movie-card">
              <img src={movie.image} alt={movie.title} />
              <div class="movie-title">{movie.title}</div>
            </div>
          </Link>
      ))}
    </div>
    </div>
  );
}
export default Home;



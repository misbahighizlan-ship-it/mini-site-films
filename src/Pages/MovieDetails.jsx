import { useParams, Link } from "react-router-dom";
import movies from "../data/movies";

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  return (
     <div class="details-container">
        <div class="details-img-wrapper">
          <img class="details-img" src={movie.image} alt={movie.title} />
     </div>

     <div class="details-info">
         <h1>{movie.title}</h1>

          {movie.year && <p><strong>Année :</strong> {movie.year}</p>}

          {movie.description && (
          <>
          <h3>Description</h3>
          <p>{movie.description}</p>
         </>
         )}

           {movie.team && movie.team.length > 0 && (
          <>
           <h3>Équipe</h3>
           <ul>
             {movie.team.map((member, index) => (
             <li key={index}>{member}</li>
            ))}
           </ul>
         </>
         )}

    <Link to="/" class="back-btn">Retour</Link>
       </div>
     </div>

  );
}

export default MovieDetails;

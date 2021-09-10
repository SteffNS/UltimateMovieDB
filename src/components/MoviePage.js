//Movie

import { Link } from 'react-router-dom'
import noPoster from '../images/no-movie-poster.jpg';
import arrangeDate from '../utilities/arrangeDate';
import useGlobal from '../store/globalApp';
import FavButton from './FavButton';

function MovieCard({ movieObj, isFav}) {

    const globalStateAndActions = useGlobal();
    const globalActions= globalStateAndActions[1];

    function handleFavClick(addToFav, obj){
        if(addToFav === true){
            globalActions.addFav(obj);
        }else{
            globalActions.removeFav(obj.id);
        }   
    }

    return(
        <div className = 'movie-card'>
            <h2>{movieObj.title}</h2>
            <div className="movie-poster">
                {movieObj.poster_path === null ?
                    <img src={noPoster} alt='no-poster' /> :
                    <Link to = {`/movie/${movieObj.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
                    </Link>
                }
            </div>
            <div className="movie-info">
                <Link to ={`/movie/${movieObj.id}`}>More Info</Link>
                {isFav ? 
                    <FavButton movieObj={movieObj} remove = {true} handleFavClick={handleFavClick} /> : 
                    <FavButton movieObj={movieObj}  handleFavClick={handleFavClick} />
                }
            </div>
            <div className='home-movie-stats'>
                <p> {movieObj.vote_average *10}% </p>
                <p>Release: {arrangeDate(movieObj.release_date)}</p>
            </div>
        </div>
    )
}

export default MovieCard;
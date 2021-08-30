import { useEffect } from 'react';
import { appTitle } from '../utilities/global';
import useGlobal from '../store/globalApp';
import FavButton from './FavButton';
import arrangeDate from '../utilities/arrangeDate';

function SingleMovieComponent({ movieObj, isFav }) {

    const globalStateAndglobalActions = useGlobal();
    const globalActions = globalStateAndglobalActions[1];

    function handleFavClick(addToFav, obj){
        if(addToFav === true){
            globalActions.addFav(obj);
        }else{
            globalActions.removeFav(obj.id);
        }   
    }

    useEffect(()=>{
        document.title = `${appTitle} - ${movieObj.title}`;
    });

    console.log(movieObj)

    return(
        <section className = 'single-movie'>
            <h2>{movieObj.title}</h2>
            <div className="single-movie-content">
                <div className="single-movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
                </div>

                {isFav ? 
                    <FavButton movieObj = {movieObj} remove = {true} handleFavClick={handleFavClick} /> :
                    <FavButton movieObj = {movieObj} handleFavClick={handleFavClick} />
                }

                <div className='movie-stats'>
                    <div>
                        <p>Rating: {movieObj.vote_average *10}%</p>
                        <p>Released: {arrangeDate(movieObj.release_date)}</p>
                    </div>
                    <div>
                        <p className='movie-tag'>{movieObj.tagline}</p>
                    </div>
                    <h3>Genres</h3>
                    <div className='movie-genre'>
                        {movieObj.genres.map((genre, i) => <p key={i}> { genre.name } </p>)}
                    </div>
                    <div className="single-movie-info">
                        <h3>Synopsis</h3>
                        <p>{movieObj.overview}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleMovieComponent
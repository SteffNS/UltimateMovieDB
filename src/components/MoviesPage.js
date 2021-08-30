import MoviePage from "./MoviePage";
import isFav from '../utilities/isFav';
import useGlobal from '../store/globalApp';


function Movies ({ movieData }) {

    const globalStateAndglobalActions = useGlobal();
    const globalState = globalStateAndglobalActions[0];

    return (
        <div className='movie-wrapper'>
            {movieData.map((singleMovie, i) => <MoviePage key = {i} movieObj={singleMovie} isFav = {isFav(globalState.favs, null, singleMovie.id)} />)}
        </div>
    )
}

export default Movies;
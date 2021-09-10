//Fav page

import { useEffect } from 'react';
import { appTitle } from '../utilities/global';
import useGlobal from '../store/globalApp';
import MoviePage from '../components/MoviePage';

function PageFavourite() {

	const globalStateAndActions = useGlobal();
    const globalState = globalStateAndActions[0];
    
    useEffect(()=>{
        document.title = `${appTitle} - My Favourites`;
    }, []);

    return (
        <div className='fav-wrapper'>
            <h1>My Favourites</h1>
            { globalState.favs.length < 1 ? 
                <p style={{height:'34vh', marginTop: '15rem'}}>No favourites, go add some favourites!</p> : 
                <div className='fav-grid'>
                    {globalState.favs.map((singleMovie, i) => {
                        return <MoviePage key = {i} 
                            movieObj = {singleMovie} 
                            isFav={true} />
                    })}
                </div>
            }
        </div>
    )
}

export default PageFavourite;
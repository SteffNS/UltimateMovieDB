//Fav page

import { useEffect } from 'react';
import { appTitle } from '../utilities/global';
import useGlobal from '../store/globalApp';
import MoviePage from '../components/MoviePage';
import {useState} from 'react';
import isFav from '../utilities/isFav';

function PageFavourite() {

    const [ready, setReady]= useState();

	const globalStateAndActions = useGlobal();
    const globalState = globalStateAndActions[0];
    const globalActions = useGlobal();
    
    useEffect(()=>{
        document.title = `${appTitle} - My Favourites`;
    }, []);
    useEffect(()=>{
        setReady(true);
    },[globalActions]);

    return (
        <div className='fav-wrapper'>
            <h1>My Favourites</h1>
            { globalState.favs.length === 0 ? 
                <p style={{height:'34vh', marginTop: '15rem'}}>No favourites, go add some favourites!</p> : 
                <div className='fav-grid'>
                    {ready && globalState.favs.map((singleMovie, i) => {
                        return <MoviePage key = {i} 
                            movieObj = {singleMovie} 
                            isFav={isFav(globalState.favs, null, singleMovie.id)} />
                    })}
                </div>
            }
        </div>
    )
}

export default PageFavourite;
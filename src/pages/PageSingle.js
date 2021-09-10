//single movie profile page
import SingleMovieComponent from "../components/SingleMovieComponent";
import { useParams } from 'react-router-dom';
import { apiToken } from '../utilities/global';
import { useEffect, useState } from 'react'
import useGlobal from "../store/globalApp";
import isFav from "../utilities/isFav";


function PageSingle() {

    const[movieData, setMovieData] = useState(null);
    const { id } = useParams();
    // const globalStateAndglobalActions = useGlobal();
    // const globalState = globalStateAndglobalActions[0];
    const globalStateAndActions = useGlobal();
    const globalState= globalStateAndActions[0];


    useEffect(()=>{
        const getMovie = async () =>{
            const res= await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + apiToken,
                }
            });
            let movieData = await res.json();
            setMovieData(movieData);
        }
        getMovie();
    }, [id]);

    return(
        <section className='single-page'>
            {movieData!== null && <SingleMovieComponent movieObj = { movieData } isFav={isFav(globalState.favs, null, movieData.id)} />}
        </section>
    )
}

export default PageSingle;
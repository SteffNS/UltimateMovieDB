import { useEffect, useState } from 'react';
import { appTitle, apiToken } from '../utilities/global';
import { NavLink } from 'react-router-dom';
import MoviesPage from '../components/MoviesPage';
import useGlobal from '../store/globalApp';
import isFav from '../utilities/isFav';



const PageHome = ({sort}) => {



    const [movieData, setMovieData] = useState(null);
    
	const globalStateAndActions = useGlobal();
    const globalState = globalStateAndActions[0];

    //get movies from the tmdb using api, returns a list of 20, slice out just the first 12
    useEffect(()=>{
        const getMovies = async () =>{
            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?&language=en-US&page=1`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + apiToken,
                }
            }, []);
            let movieData = await res.json();
            console.log(movieData);
            movieData = movieData.results.splice(0, 12);
            setMovieData(movieData);
        }
        getMovies();
    }, [sort]);
    //webpage title
    useEffect(()=>{
        document.title = `${appTitle}`;
    }, []);

    return (
        <div>
            <nav className = 'nav-sort'>
                <ul>
                    <li>
                        <NavLink to='/sort/popular'>Popular</NavLink>
                    </li>
                    <li>
                        <NavLink to='/sort/toprated'>Top Rated</NavLink>
                    </li>
                    <li>
                        <NavLink to='/sort/nowplaying'>Now Playing</NavLink>
                    </li>
                    <li>
                        <NavLink to='/sort/upcoming'>Upcoming</NavLink>
                    </li>
                </ul>
            </nav>
            <section>
                {movieData!==null && <MoviesPage movieData={movieData} isFav={isFav(globalState.favs, null, movieData.id)} />}
            </section>
        </div>
    )
}

export default PageHome;

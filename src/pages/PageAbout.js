//dev tools
import { useEffect } from 'react';
import { appTitle } from '../utilities/global.js';
import tmdbLogo from '../images/tmdb-logo.svg';



const PageAbout = () => {

    useEffect(()=>{
        document.title = `${appTitle} - About`;
    }, []);

    return (
        <div className='about-section'>
            <section>
                <h1>Welcome to the Ultimate Movie Database</h1>
                <p>Coded and powered by REACT, this webapp is your homepage for all things movies! Truly a full fledged move database for movie lovers.</p>
                <p>Ultimate Movie Database uses the TDMb API but is not endorsed or certified by TMDb.</p>
                <img className = 'tmdb-logo'src={tmdbLogo} alt="The Movie Database logo" />
            </section>
            <section>
                <h2>How It Works</h2>
                <p>On first load, the front page will display the 12 most popular movies at the moment. You can then sort to see upcoming, top rated and now playing movies.</p>
                <p>Clicking on the "More Info" button will show you the movie's details like the release date, genres, and rating.</p>
                <p>You can add movies to your favourite list by clicking on the heart button next to the movies.</p>
                <p>Update and maintain your favourite list to reflect your current favourites.</p>
            </section>
        </div>
    )
}

export default PageAbout;
//dev tools
import { useEffect } from 'react';
import { appTitle } from '../utilities/global';
import { Link } from 'react-router-dom';



const PageNotFound = () => {

    useEffect(()=>{
        document.title = `${appTitle} - Page Not Found`;
    }, []);

    return (
        <section div = 'not-found'>
            <h1>Oops, this page isn't real</h1>
            <p>Looks like an error happened or you the URL wasn't written correctly.</p>
            <p>One does not simply find a 404 page.</p>
            <div id='link-back'>
                <h2><Link to = '/' exact>Front Page</Link></h2>
            </div>
        </section>
    )
}

export default PageNotFound;

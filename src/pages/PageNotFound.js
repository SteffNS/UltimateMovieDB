//dev tools
import { useEffect } from 'react';
import { appTitle } from '../utilities/global';
import { Link } from 'react-router-dom';



const PageNotFound = () => {

    useEffect(()=>{
        document.title = `${appTitle} - Page Not Found`;
    }, []);

    return (
        <section>
            <h1>Oops, this page isn't real</h1>
            <p>Looks like an error happened or you the URL wasn't written correctly.</p>
            <p>Insert spicey meme here</p>
            <h2><Link to ='/' exact>Front Page</Link></h2>
        </section>
    )
}

export default PageNotFound;

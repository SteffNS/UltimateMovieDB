// Fav Button

import heartEmpty from '../images/heart-empty.png';
import heartFill from '../images/heart-fill.png';

function FavButton({ movieObj, remove, handleFavClick }) {

    function handleAddFav(){
        handleFavClick(true, movieObj);
    }

    function handleRemoveFav(){
        handleFavClick(false, movieObj);
    }

    return (
        <>
            {remove === false ? 
            <button onClick={handleAddFav}>
                <img src={heartEmpty} alt="Empty heart" />
            </button> : 
            <button onClick={handleRemoveFav}>
                <img src={heartFill} alt="Full heart" />
            </button>}
        </>
    );
}

FavButton.defaultProps = {
    remove: false
}

export default FavButton;
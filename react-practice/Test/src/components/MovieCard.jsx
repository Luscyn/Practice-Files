
function MovieCard({movie}){

    function onFavoriteClick(){
        alert(`Added`)
    }

    return (
        <>
            <h2>Movie Title: {movie?.title || "No Title"}</h2>
            <p>Movie release date: {movie?.release_date || "Not applicable"}</p>
            <button onClick={onFavoriteClick}>❤︎</button>
            
        </>

    )
}

export default MovieCard
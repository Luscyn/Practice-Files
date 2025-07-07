

function MovieCard({movie}){
    return (
        <>
        
        <h1>Title: {movie?.title || "Not Available"}</h1>
        <p>Release date: {movie?.release_date || "Not Available"}</p>
        </>
    )
}

export default MovieCard;
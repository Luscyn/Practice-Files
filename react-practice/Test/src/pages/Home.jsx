import { useState } from "react";
import MovieCard from "../components/MovieCard";


function Home(){

    const [searchQuery, setSearchQuery] = useState("");


    function handleSearch(e){
        e.preventDefault(); // prevent default refresh
        alert(searchQuery)
        // setSearchQuery("")
        setSearchQuery("");
    }

    const movies = [
        {id: 1, title: "Echoes of Tomorrow", release_date: "2025-03-14"},
        {id: 2, title: "Neon Skies", release_date: "2024-11-22"},
        {id: 3, title: "The Last Sentinel", release_date: "2023-07-09"},
        {id: 4, title: "Whispers in the Fog", release_date: "2022-10-31"},
        {id: 5, title: "Chrono Rift", release_date: "2025-06-01"}
    ]
    
    return <>

        <form onSubmit={handleSearch}>
            <input type="text" placeholder="Search for movies" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>

        </form>

        {movies.map((movie) => (
            movie.title.toLowerCase().startsWith(searchQuery) &&<MovieCard movie={movie} key={movie.id}/>
        ))}

    
    </>
}

export default Home

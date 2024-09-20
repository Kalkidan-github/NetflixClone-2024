import React, {useEffect, useState} from 'react';
import './row.css';
import axios from "../../../utils/axios";
// import movieTrailer from `movie-trailer`;
// import YouTube from `react-youtube`;

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const base_Url = "https://image.tmdb.org/t/p/original";
    
    useEffect(() => {
        (async () => {
            try {
                console.log(fetchUrl);
                const request = await axios.get(fetchUrl);
                console.log(request);
                setMovie(request.data.results);
            } catch (error) {
                console.log("error", error);
            }
        })()
        
    }, [fetchUrl]);
const handleClick = (movie) => {
    if (trailerUrl) {
        setTrailerUrl('')
    } else {
        movieTrailer(movie?.title || movie?.name || movie?.original_name).then((Url) => {
                console.log(Url)
                const urlParams = new URLSearchParams(new URL(Url).search)
                console.log(urlParams)
                console.log(urlParams.get('v'))
                setTrailerUrl(urlParams.get('v'));
            })
    }
}
const opts = {
    height: '390',
    width: "100%",
    playerVars: {
        autoplay: 1,
    },
}
return (
    <div clasName="row">
        <h1>{title}</h1>
        <div className="row__posters">
            {movies?.map((movie, index) => (
                <img
                    // width= {250}
                    onClick={() => handleClick(movie)}
                    key={index} src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className = {`row__poster ${isLargeRow && " row__posterLarge"}`}
            />
                    ))}
        </div>
        <div style={{ padding: '40px' }}>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
           </div> 
        </div>
  
            )
}
// "https://api.themoviedb.org/3/discover/movie?api_key=572f526d6bceeb84011f0c638fead189 & include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"

export default Row

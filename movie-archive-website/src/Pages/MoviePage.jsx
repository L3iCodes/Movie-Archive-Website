import { useEffect, useState } from 'react';
import { fetchGenreList, getMovie, fetchActors } from '../server/database';
import { useParams } from 'react-router-dom';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';
import { CircularCard } from '../Components/Card';
import Carousel from '../Components/Carousel';

function MoviePage(){
    const [movieInfo, setMovieInfo] = useState([]);
    const [genre, setGenre] = useState({});
    const [actors, setActors] = useState([])
    const { id } = useParams();
    const imgSrc = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        const getMovieData = async () => {
            const movie = await getMovie(id);
            setMovieInfo(movie);

            const genreList = await fetchGenreList(); 
            setGenre(genreList);

            const actorList = await fetchActors(id);
            setActors(actorList.cast)
        };

        getMovieData();
    }, [id]);
    
    const loadCast = actors.map((element) => (
        <CircularCard key={element.id}
                      name={element.original_name}
                      character={element.character}
                      img={`https://image.tmdb.org/t/p/w500`+element.profile_path}
        />
    ))
    
    return(
        <>
            <Hero   key={movieInfo.id}
                title={movieInfo.original_title}
                // genre={movieInfo.genres.map(element => element.name).join(" | ")}
                rating={Number(movieInfo.vote_average).toFixed(2)}
                img={imgSrc + movieInfo.backdrop_path}
                overview={movieInfo.overview}
                btnText={"Add to Watchlist"}
            />
            <Carousel className="2xl:mt-[-150px]">
                {loadCast}
            </Carousel>
            
        </>
        
        
    )
}

export default MoviePage
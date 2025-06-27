import Carousel from "../Components/Carousel";
import { VerticalCard } from "../Components/Card";
import { fetchMovieByGenre, fetchData, fetchGenreList } from "../server/database";
import { useEffect, useState } from "react";

function BrowsePage(){
    const [genreData, setGenreData] = useState([])
    const imgSrc = "https://image.tmdb.org/t/p/w500"

    useEffect(()=>{
        const fetchDatas = async () => {
            const genreList = await fetchGenreList();
            
            const updatedGenres = {};
            for (const key of Object.keys(genreList)) {
                const movies = await fetchMovieByGenre(key);
                
                updatedGenres[key] = {
                    name: genreList[key], // genre name (e.g., "Action")
                    movies: movies.results // array of movies
                };
            }

            setGenreData(updatedGenres);
        }
        fetchDatas();
    }, [])

    console.log(genreData)
    
    return(
        <>
            {Object.entries(genreData).map(([genreId, genreInfo]) => (
                <Carousel id = {genreId} genre={genreInfo.name} className="2xl:mt-[50px] 2xl:mb-[0px] lg:pl-[10%] lg:pr-[10%]" title={genreInfo.name}>
                    {genreInfo.movies.map((element, index) => (
                        <VerticalCard key={element.id || index}
                                    id={element.id}
                                    title={element.original_title} 
                                    year={element.release_date.split("-")[0]}
                                    img={imgSrc+element.poster_path}
                                    index={index} />
                    ))}
                </Carousel>
            ))};
            
        </>
    );
}

export default BrowsePage;
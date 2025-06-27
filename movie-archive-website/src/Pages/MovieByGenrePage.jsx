import { useParams } from "react-router-dom";
import { VerticalCard } from "../Components/Card";
import { fetchMovieByGenre } from "../server/database";
import { useEffect, useState } from "react";


function MovieByGenrePage(){
    const { id, genre } = useParams();

    const [movieList, setMovieList] = useState([])
    const imgSrc = "https://image.tmdb.org/t/p/w500"
    
    console.log(id)
    useEffect(() => {
        const fetchData = async () => {
            const movies = await fetchMovieByGenre(id)
            setMovieList(movies.results)
        }

        fetchData();
    }, [id])

    const renderMovie = movieList.map((element, index) => (
        <VerticalCard key={element.id || index}
                        id={element.id}
                        title={element.original_title} 
                        year={element.release_date.split("-")[0]}
                        img={imgSrc+element.poster_path}
                        index={index} />
    ));

    
    console.log(movieList)

    return(
        <>
            <div className="flex flex-col pl-[5%] pr-[5%] mt-9 w-full
                             lg:pl-[10%] lg:pr-[10%] z-20">
                <p className='mb-5 text-[1rem] font-bold tracking-widest
                              xl:text-[1.3rem]'>{genre}</p>
                <div className="flex flex-row gap-5 justify-evenly items-start w-full overflow-hidden flex-wrap">
                    {renderMovie}
                </div>
            </div>
            
          
        </>
    );
}

export default MovieByGenrePage
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Carousel from "../Components/Carousel";
import {HorizontalCard, VerticalCard} from "../Components/Card";
import {fetchData, fetchGenreList} from "../server/database";
import { useEffect, useState } from "react";


function HomePage(){

    const [trending, setTrending] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [genreList, setGenreList] = useState([])
    const imgSrc = "https://image.tmdb.org/t/p/w500"

    const [currentHero, setCurrentHero] = useState(0)

    useEffect(()=>{
        const getMovies = async () => {
            try{
                const trendingMovies = await fetchData("trending", 1);
                setTrending(trendingMovies.results)

                const upcomingMovies = await fetchData("upcoming", 1);
                setUpcoming(upcomingMovies.results)

                const genreList = await fetchGenreList();
                setGenreList(genreList)
            }catch(error){
                console.error("ERROR " + error)
            }
        }
        getMovies();
    }, [])

    useEffect(()=>{
        const interval = setInterval(() => {
            setCurrentHero(prev => (prev + 1) % trending.length);
        }, 5000);

        return () => clearInterval(interval); 
    }, [trending])

    const trendingList = trending.map((element, index) => (
        <HorizontalCard key={element.id || index}
                        id={element.id}
                        title={element.original_title} 
                        year={element.release_date.split("-")[0]}
                        img={imgSrc+element.backdrop_path}
                        index={index} />
    ));

    const upcomingList = upcoming.map((element, index) => (
        <VerticalCard key={element.id || index}
                        id={element.id}
                        title={element.original_title} 
                        year={element.release_date.split("-")[0]}
                        img={imgSrc+element.poster_path}
                        index={index} />
    ));

    const heroList = trending.map((element, index) => (
        <Hero   key={element.id}
                id={element.id}
                title={element.original_title}
                genre={element.genre_ids.map(id => genreList[id]).filter(Boolean).join(" | ")}
                rating={Number(element.vote_average).toFixed(2)}
                img={imgSrc + element.backdrop_path}
                btnText={"Check Out"}
                actionType={"redirect"}
        />
    ))

    const card2 = Array(9).fill(<VerticalCard/>)
    return(
        <>
            {heroList[currentHero]}
            <Carousel className="2xl:mt-[-150px]" title={"Trending"}>{trendingList}</Carousel>
            <Carousel title={"Upcoming"}>{upcomingList}</Carousel>
            <Carousel title={"Latest"}>{card2}</Carousel>
        </>
    );
}

export default HomePage;
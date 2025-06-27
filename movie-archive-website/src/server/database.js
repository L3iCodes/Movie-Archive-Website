const apiKey = import.meta.env.VITE_API_KEY;

const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
        }
    };

export async function fetchData(type, page){
    let response;
    if(type === "trending"){
        response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}`, options)  
    }else if(type === "upcoming"){
        response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`, options)
    }

    const data = await response.json()
    return data;
}

export async function fetchGenreList(){
    let response;

    try{
        response = await fetch(`https://api.themoviedb.org/3/genre/movie/list`, options);

        const data = await response.json()
        const {genres} = data

        const genreMap = {};

        for(let genre of await genres){
                genreMap[genre.id] = genre.name
            }

        return genreMap;
        
    }catch(error){
        console.error(error)
    }
    
}

export async function getMovie(id){
    let response;

    try{
        response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error)
    }
}

export async function fetchActors(id){
    let response;
    let data;

    response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options);

    data = await response.json()

    return data
}

export async function fetchMovieByGenre(id){
    let response;
    response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}`, options);
    const data = await response.json();
    return data;
}


export default fetchData;
import sampleImg from '../assets/Thunderbolt.jpg'
import sampleImg2 from '../assets/Stitch.png'
import { useNavigate } from 'react-router-dom';



export function HorizontalCard({ id, title, year, img, index }){
    const navigate = useNavigate();
    const redirect = () => {
        navigate(`/movie/${id}`);
    };

    return(
        <>
            <div onClick={redirect} key={index} className=" group bg-amber-200 w-[200px] rounded-2xl border border-solid border-accent overflow-hidden flex-shrink-0 relative
                            md:w-[300px] cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-tr from-blacker to-[rgba(34,34,34,0)]
                                group-hover:bg-black/60 transition-colors duration-300" />
                    <img src={img} className='object-cover'></img>
                    <div className="flex flex-col justify-end absolute bottom-0 left-0 w-full p-5 z-10">
                        <p className='font-bold text-[1rem]
                                      md:text-[1.5rem]'>{title}</p>
                        <p className='text-[0.9rem]
                                      md:text-[1rem]'>{year}</p>
                    </div>
            </div>
        </>
    );
}

export function VerticalCard({id, title, year, img, index}){
    const navigate = useNavigate();
    const redirect = () => {
        navigate(`/movie/${id}`);
    };

    return(
        <>
            <div onClick={redirect} key={index} className='flex flex-col'>
                <div className=" bg-amber-200 h-[250px] w-[160px] rounded-2xl border border-solid border-accent overflow-hidden flex-shrink-0 relative
                                md:h-[300px] md:w-[210px] cursor-pointer">
                    <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-tr from-blacker to-[rgba(34,34,34,0)]
                                  hover:bg-black/60 transition-colors duration-300" />
                    <img src={img} className='object-cover'></img>
                </div>

                <p className=' font-bold text-[1rem] mt-2'>{title}</p>
                <p className='text-[0.8rem]'>{year}</p>
            </div>
        </>
    );
}

export function CircularCard({name, character, img}){
    return(
        <>
            <div className=' flex flex-col items-center p-1.5 h-[250px] w-[160px]'>
                <div className='bg-white w-[150px] h-[150px] rounded-full relative border-4 border-accent'>
                    <img src={img} className='w-full h-full object-cover rounded-full'></img>
                </div>
                <p className='mt-3 font-bold text-center'>{name}</p>
                <p className='mt-2 text-[12px] text-center'>{character}</p>
            </div>
        </>
    );
    
}

export default HorizontalCard
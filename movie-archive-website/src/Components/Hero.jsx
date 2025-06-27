import superman from '../assets/Superman.jpg'
import starIcon from '../assets/star.svg'
import clockIcon from '../assets/clock.svg'
import { useNavigate } from 'react-router-dom';


function Hero({ title, img, genre, rating, overview, btnText, actionType, id}){

    const navigate = useNavigate()

    const handleClick = () => {
    if (actionType === "redirect" && id) {
      navigate(`/movie/${id}`);
    }
  };


    return(
        <>
            <div className="flex w-full h-[400px] relative overflow-hidden
                            md:h-[30%]
                            lg:h-auto lg:pl-[10%] lg:pr-[10%]
                            xl:h-auto">
                <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-tr from-blacker to-[rgba(34,34,34,0)]" />
                <div className="absolute top-0 left-0 w-[50%] h-full z-12 bg-[linear-gradient(to_right,_#000000_30%,_rgba(34,34,34,0)_80%)]" />
                <div className="absolute top-0 left-0 w-full h-full z-11 bg-gradient-to-t from-blacker to-[rgba(34,34,34,0)]" />
                <div className="absolute top-0 right-0 w-[50%] h-full z-12 bg-[linear-gradient(to_left,_#000000_20%,_rgba(34,34,34,0)_80%)]" />
                <img src={img} className=' h-full w-full object-cover z-0'></img>
                
                <div className='flex flex-col justify-end absolute top-0 left-0 z-20 p-[5%] w-full h-full
                                lg:pl-[10%] lg:pr-[10%]
                                xl:justify-center
                                2xl:mt-[-40px]'>
                    <h1 className=' font-bold text-[3rem] m-0
                                    sm:text-[3.5rem]
                                    md:text-[4rem]
                                    lg:text-[4.5rem]
                                    xl:text-[5rem]'>
                        {title}
                    </h1>
                    <p className='mt-[-5px] mb-[10px] text-[1rem]
                                  xl:mt-[-30px] xl:text-[1.5rem]'
                        >{genre}
                    </p>
                    <div className='flex items-center
                                    xl:mt-5'>
                        <div className='flex items-center justify-center gap-2 w-[80px] h-6 bg-secondary rounded-2xl mr-3
                                        xl:text-[1.5rem] xl:h-8 xl:w-[100px]'>
                            <img src={starIcon} alt="Star Icon" className='h-5'></img>
                            <p className='font-bold '>{rating}</p>
                        </div>
                        <img src={clockIcon} alt='Clock Icon' className='h-5 mr-1'/>
                        <p className='text-secondary font-bold text-[1rem]
                                      xl:text-[1.5rem]'>NaN</p>
                    </div>
                    <p className='mt-5 text-[12px] w-[90%]
                                  md:text-[15px] md:w-[70%]
                                  lg:text-[1rem] lg:w-[50%]'
                                  
                                  >{overview}</p>
                    <button onClick={handleClick} className='w-[40%] mt-[40px] pt-[5px] pb-[5px] bg-secondary font-bold rounded-2xl cursor-pointer
                                       md:w-[20%]
                                       lg:w-[20%] lg:text-[1.5rem]
                                       xl:text-[1.5rem]'>
                        {btnText}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Hero
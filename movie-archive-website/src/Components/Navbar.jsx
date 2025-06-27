import searchIcon from '../assets/search.svg';
import hamburgIcon from '../assets/hamburger.svg';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function Navbar(){
    const navigate = useNavigate();

    const home = () => {
        navigate(`/`);
    };

    return(
        <>
            <div className="flex items-center w-full h-[50px] bg-primary pl-[5%] pr-[5%]
             lg:pl-[10%] lg:pr-[10%] sticky top-0 z-50">
                <div className="bg-gradient-to-r from-blacker to-primary absolute top-0 left-0 w-full h-full z-0"/>
                <p className=" font-bold text-[18px] z-10 mr-10">LOGO</p>

                <div className='hidden z-10 md:flex w-full gap-5'>
                    <ul className='flex gap-5'>
                        <li onClick={home} className=' cursor-pointer'>Home</li>
                        <li className=' cursor-pointer'>Browse</li>
                        <li className=' cursor-pointer'>Watchlist</li>
                    </ul>
                    <div className='flex items-center w-[45%] bg-accent text-black pl-1.5 pr-1.5 rounded-2xl'>
                        <input type="text" placeholder="Search" className="w-full"/>
                        <svg className='w-4 h-4 ml-2 shrink-0'>
                            <path d="M12.5014 11.0014H11.7114L11.4314 10.7314C12.0564 10.0054 12.5131 9.15021 12.769 8.22705C13.0248 7.30389 13.0735 6.33559 12.9114 5.39144C12.4414 2.61144 10.1214 0.39144 7.32144 0.0514397C6.33706 -0.0730946 5.33723 0.0292113 4.39846 0.350529C3.4597 0.671846 2.60688 1.20366 1.90527 1.90527C1.20366 2.60688 0.671846 3.4597 0.350529 4.39846C0.0292113 5.33723 -0.0730946 6.33706 0.0514397 7.32144C0.39144 10.1214 2.61144 12.4414 5.39144 12.9114C6.33559 13.0735 7.30389 13.0248 8.22705 12.769C9.15021 12.5131 10.0054 12.0564 10.7314 11.4314L11.0014 11.7114V12.5014L15.2514 16.7514C15.6614 17.1614 16.3314 17.1614 16.7414 16.7514C17.1514 16.3414 17.1514 15.6714 16.7414 15.2614L12.5014 11.0014ZM6.50144 11.0014C4.01144 11.0014 2.00144 8.99144 2.00144 6.50144C2.00144 4.01144 4.01144 2.00144 6.50144 2.00144C8.99144 2.00144 11.0014 4.01144 11.0014 6.50144C11.0014 8.99144 8.99144 11.0014 6.50144 11.0014Z" fill="white"/>
                        </svg>
                    </div>
                    <p className='ml-auto'>Signup/Login</p>
                </div>

                <div className='flex ml-auto gap-5 z-10 md:hidden'>
                    <img src={searchIcon} alt='Search Icon' className=' h-[18px] cursor-pointer'></img>
                    <img src={hamburgIcon} alt='Search Icon' className=' h-[18px] cursor-pointer'></img>
                </div>
                
            </div>
        </>
    );
}

export default Navbar
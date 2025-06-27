import { useState, useRef, useEffect } from 'react';
import {HorizontalCard, VerticalCard} from './Card';

function Carousel({className, title, children}){
    const scrollContainerRef = useRef(null)
    const scrollAmount = 296;
    
    const handleNext = () => {
        if (scrollContainerRef.current){
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handlePrev = () => {
        if (scrollContainerRef.current){
            scrollContainerRef.current.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        container.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
        container.removeEventListener("wheel", handleScroll);
        };
    }, []);

    
    const handleScroll = (e) => {
        e.preventDefault();
        scrollContainerRef.current.scrollBy({
        left: e.deltaY,
        behavior: "smooth",
        });
    };

   

    return(
        <>
            <div className={`pl-[5%] pr-[5%] mt-9 relative w-full
                            xl:mt-[-50px] xl:mb-[120px] z-20 ${className}`}>
                <p className='mb-2 text-[1rem] font-bold tracking-widest
                              xl:text-[1.3rem]'>{title}</p>
                <div className='w-full flex overflow-hidden gap-3 relative'>
                    
                    <div className='flex gap-3 overflow-x-auto hide-scrollbar' ref={scrollContainerRef}>
                        {children}
                    </div>
                    
                    <button onClick={handlePrev} className='flex justify-center w-[25px] h-[25px] absolute top-1/2 left-0 bg-accent translate-y-[-50%] z-10 rounded-4xl cursor-pointer'>&#10094;</button>
                    <button onClick={handleNext} className='flex justify-center w-[25px] h-[25px] absolute top-1/2 right-0 bg-accent translate-y-[-50%] z-10 rounded-4xl cursor-pointer'>&#10095;</button>
                </div>
                
            </div>
        </>
    );
}

export default Carousel;
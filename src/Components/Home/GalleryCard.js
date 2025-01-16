import React, { useState } from 'react'

function GalleryCard({ image, text }) {
    const [hoveredCard, sethoverCard] = useState(false);
    return (
        <div className='w-full h-[400px] rounded-3xl 
        transition-all duration-500 bg-transparent p-4 
        shadow-lg md:shadow-2xl
        hover:shadow-gray-800
        sm:flex sm:justify-center sm:items-center
        '
            onMouseOver={() => { sethoverCard((previousState) => previousState = true) }}
            onMouseLeave={() => { sethoverCard((previousState) => previousState = false) }}
        >
            <div className='container h-full rounded-xl relative overflow-hidden
            shadow-lg md:shadow-2xl
            transition-all duration-1000
           hover: shadow-gray-100
           
            '>

                <img className='absolute w-full h-full object-cover ' src={image} alt={text} />
                {hoveredCard && (<div className='absolute bottom-0 
                opacity-45 z-[2] bg-[#676668] 
                w-full h-full object-cover
                flex flex-col justify-center items-center
                transition-all duration-500
                '>
                    <h1 className='text-white text-lg mb-2 text-center font-sans'>{text}</h1>
                    <h1 className='text-white font-bold text-2xl text-center font-serif'>{text}</h1>

                </div>)
                }

            </div>
        </div>
    )
}

export default GalleryCard;
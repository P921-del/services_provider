import React from 'react'

export const Logo = () => {
    return (
        <div className='sm:h-1/4 md:h-full md:mt-4 md:w-16  md:mb-0 sm:mb-20  w-14 '>
            <img className='rounded-3xl cursor-pointer' src='/assests/logo.png' alt='logo' />
            <h1 className='cursor-pointer inline text-white text-base font-sans'>Assuit Services Provider</h1>
        </div>
    )
}

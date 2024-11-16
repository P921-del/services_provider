import React from 'react'
import { Logo } from './logo'
import Nav from './Nav'
export const Header = () => {

    return (
        <div className='w-full md:h-40 sm:h-52 sticky bg-dark-background  z[20] mx-auto bg-blue-950'>
            <div className="sm:mx-auto sm:w-3/4 md:w-full relative container h-full flex sm:justify-center md:justify-between items-center flex-wrap shadow-sm">
                <Logo />
                <Nav />
            </div>
        </div>
    )
}

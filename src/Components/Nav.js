import React from 'react'
import { NavLink } from 'react-router-dom'
import ServicesdropDownList from './ServicesdropDownList'
export default function Nav() {
    const Services = [
        { id: 1, name: "Hospitals", path: "/hospitals" },
        { id: 2, name: "Schools", path: "/schools" },
        { id: 3, name: "Clinics", path: "/clinics" },
        { id: 4, name: "Restaurants", path: "/restaurants" },
    ];
    return (

        <div className='flex justify-center  items-center md:h-3/4 md:my-auto md:w-3/4'>
            <NavLink className='relative navLink inline-block no-underline text-white mx-5 font-sans hover:text-blue-300' to="/">HOME</NavLink>
            <ServicesdropDownList Services={Services} />
            <NavLink className='relative navLink inline-block no-underline text-white mx-5 font-sans hover:text-blue-300' to="/projects">PROJECTS</NavLink>
            <NavLink className='relative navLink inline-block no-underline text-white mx-5 font-sans hover:text-blue-300' to="/contact">CONTACT US</NavLink>
            <NavLink className='relative navLink inline-block no-underline text-white mx-5 font-sans hover:text-blue-300' to="/about">ABOUT</NavLink>
            <NavLink className='relative flex items-center justify-center w-20 h-12 navLink rounded-md bg-blue-500 hover:bg-blue-700 no-underline text-white mx-5 font-sans stroke-white stroke-2' to="/login">Login</NavLink>

        </div>

    )
}

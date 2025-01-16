import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
function Footer() {
    const servicesSection = [
        { id: 1, name: "Hospitals" },
        { id: 2, name: "Schools" },
        { id: 3, name: "Clinics" },
        { id: 4, name: "Restaurants" },
    ];
    const AboutSection = [
        { id: 1, name: "Home" },
        { id: 2, name: "Projects" },
        { id: 3, name: "Contact us" },
        { id: 4, name: "About" }
    ];

    return (
        <div className='grid grid-cols-1 grid-rows-3 md:flex  md:flex-row md:flex-wrap w-full md:h-80 bg-gray-900'>
            <div className='flex flex-col mb-2 w-full md:w-[30%] md:mr-4 lg:mr-2 mt-4'>

                <div className='relative flex justify-center items-center mb-7 mx-auto'>
                    <span className='
                inline
              absolute top-0 left-0
             text-green-500
             text-2xl
             font-serif font-bold
              w-0 h-full stroke-0 stroke-gray-900
              border-r-2 border-r-green-500
              overflow-hidden
              animate-textfillfirst
              '>Assui5damat....</span>
                    <h1 className=' text-gray-900
                 stroke-2 stroke-gray-600 text-2xl 
                font-serif font-bold
                '>
                        Assui5damat....
                    </h1>

                </div>



                <ul className='flex gap-2 w-full justify-center items-center'>
                    <li className=' bg-gray-700 w-[12%] flex justify-center items-center group hover:bg-blue-600'>
                        <FaFacebookF className='text-white text-lg bg-transparent w-3/4 h-1/2 transition-all duration-1000 group-hover:text-white' url="https://www.facebook.com/profile.php?id=100021902261141&locale=ar_AR" />
                    </li>
                    <li className='bg-gray-700 w-[12%] flex justify-center items-center group  hover:bg-blue-500'><FaTwitter className='text-white text-lg bg-transparent w-3/4 h-1/2 transition-all duration-1000 group-hover:text-white' url="https://www.youtube.com/" /></li>
                    <li className='bg-gray-700 w-[12%] flex justify-center items-center group  hover:bg-red-600'><IoLogoYoutube className='text-white text-lg bg-transparent w-3/4 h-1/2 transition-all duration-1000 group-hover:text-white' url="httpss://www.youtube.com/" /></li>
                </ul>
                <p className='mt-4 grid grid-cols-1 grid-rows-2 w-1/2 mx-auto md:w-full md:mx-0 gap-y-3 md:flex md:flex-wrap text-gray-500 text-lg  md:ml-6 md:text-start '>
                    <div className='sm:block md:inline'><span>Contact us:</span> &nbsp;<span className='text-white'>hello@explain.ninja</span></div>
                    <div className='sm:block md:inline'><span>@ Copywrite Assui5damat,2025</span></div>
                </p>
            </div>
            <div className='flex flex-col items-center justify-center w-full md:w-1/4 md:mr-3 lg:mr-2 '>
                <h1 className='text-center text-white font-serif text-xl'>ABOUT US</h1>
                <ul className='w-full flex flex-col md: justify-center items-center'>
                    {AboutSection.map((service, index) => {
                        if (index === 3) {
                            return (<li key={service.id} className='flex items-center  group transition-all duration-[1s] hover:pl-4 w-1/2 sm:mx-auto md:mx-0 md:w-[90%] md:mr-auto pb-4'> <MdOutlineKeyboardDoubleArrowRight className='text-blue-700 text-2xl mr-1' /> <h4 className="group-hover:text-white transition-all duration-[1s] underline text-gray-500 text-lg">{service.name}</h4></li>
                            );
                        }
                        return (
                            <li key={service.id} className='flex items-center group transition-all duration-[1s] hover:pl-4 w-1/2 sm:mx-auto md:mx-0 md:w-[90%] md:mr-auto pb-4 border-solid border-gray-400 border-b-2'> <MdOutlineKeyboardDoubleArrowRight className='text-blue-700 text-2xl mr-1' /> <h4 className="group-hover:text-white transition-all duration-[1s] underline text-gray-500 text-lg">{service.name}</h4></li>
                        );
                    }
                    )}
                </ul >
            </div >
            <div className='flex flex-col items-center justify-center sm:w-full md:w-1/4'>
                <h1 className='text-center text-white font-serif text-xl'>SERVICES</h1>
                <ul className='w-full flex flex-col md: justify-center items-center'>
                    {servicesSection.map((service, index) => {
                        if (index === 3) {
                            return (<li key={service.id} className='flex items-center group transition-all duration-[1s] hover:pl-4 w-1/2 sm:mx-auto md:mx-0 md:w-[90%] md:mr-auto pb-4'> <MdOutlineKeyboardDoubleArrowRight className='text-blue-700 text-2xl mr-1' /> <h4 className="group-hover:text-white transition-all duration-[1s] underline text-gray-500 text-lg">{service.name}</h4></li>
                            );
                        }
                        return (
                            <li key={service.id} className='flex items-center group transition-all duration-[1s] hover:pl-4 w-1/2 sm:mx-auto md:mx-0 md:w-[90%] md:mr-auto pb-4 border-solid border-gray-400 border-b-2'> <MdOutlineKeyboardDoubleArrowRight className='text-blue-700 text-2xl mr-1' /> <h4 className="group-hover:text-white transition-all duration-[1s] underline text-gray-500 text-lg">{service.name}</h4></li>
                        );
                    }
                    )}

                </ul >
            </div>
        </div >
    )
}

export default Footer
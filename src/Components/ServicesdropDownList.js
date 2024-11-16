import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

function ServicesdropDownList(props) {
    // const servicesDropDownList = useRef();
    const [isOpen, setisOpen] = useState(false);
    // useEffect(() => {
    //     servicesDropDownList.current.onClick = () => { setisOpen(!isOpen); };
    // }, [isOpen]);

    return (
        <div className='flex flex-col items-center 
                        w-[150px]
                        rounded-lg'
            onMouseLeave={() => setisOpen(false)}
        >
            <button
                onClick={() => setisOpen(!isOpen)}
                className='bg-blue-400 p-4 w-full
                             flex  items-center justify-between 
                            font-bold font-sans
                            border-4 border-transparent rounded-lg
                          active:border-white
                         text-lg  tracking-wider active:text-white
                            duration-300
            '>SERVICES
                {!isOpen ? (<AiOutlineCaretDown className='h-4' />)
                    : (<AiOutlineCaretUp className='h-4' />)}
            </button>
            {isOpen && (<div className='absolute top-20
             flex flex-col items-start
              rounded-lg bg-blue-400 p-2 w-[150px]'>
                {props.Services.map((item) => {
                    return (
                        <div className="
                    p-4 w-full flex justify-between
                  hover:bg-blue-300 cursor-pointer rounded-r-lg 
                    border-l-transparent hover:border-l-white border-l-4" key={item.id}>
                            <NavLink to={item.path} className='font-bold'>{item.name}</NavLink>
                        </div>
                    );
                })}
            </div>)}
        </div>
    );
}

export default ServicesdropDownList


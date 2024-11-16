import React from 'react'
import { useNavigate } from 'react-router-dom'

function GetStartedButton() {
    const Contact = useNavigate();
    return (
        <div className='flex flex-col items-center mt-12 mb-28 '>
            <button className='w-52 h-16 text-white text-center font-sans bg-blue-800 hover:bg-blue-950'
                onClick={() => Contact('/contact')}
            >GET STARTED</button>
        </div>
    )
}

export default GetStartedButton
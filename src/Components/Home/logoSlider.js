import React from 'react'

function LogoSlider(props) {
    return (
        <img className='w-32 h-full object-cover' src={props.path} alt={props.name} />
    )
}

export default LogoSlider
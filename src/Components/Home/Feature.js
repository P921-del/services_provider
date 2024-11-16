import React from 'react'

function Feature(props) {
    if (props.id === 4)
        return (
            <div className='w-full h-1/5 flex flex-col sm:items-center sm:mt-4 md:mt-0 md:h-full md:items-ceter'>
                <img className='w-16 h-16 mb-2' src={props.imageSrc} alt={props.imageAlt} />
                <h1 className='text-white text-center font-serif font-bold text-lg mb-2'>{props.Header}</h1>
                <div>
                    <p className='text-white text-center font-sans text-sm'>{props.Paragraph}</p>
                </div>
            </div>
        );
    return (
        <div className='w-full h-1/5 flex flex-col sm:items-center md:items-center'>
            <img className='w-16 h-16 mb-2' src={props.imageSrc} alt={props.imageAlt} />
            <h1 className='text-white text-center font-serif font-bold text-lg mb-2'>{props.Header}</h1>
            <div>
                <p className='text-white text-center font-sans text-sm'>{props.Paragraph}</p>
            </div>
        </div>
    );
}

export default Feature
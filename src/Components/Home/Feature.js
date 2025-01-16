import React from 'react'

function Feature(props) {
    if (props.id === 4)
        return (
            <div className='w-full h-1/5 flex flex-col x sm:items-center sm:mt-4 md:justify-normal md:items-ceter'>
                <div className='w-full h-full flex justify-center items-center'>
                    <img className='w-20 h-full' src={props.imageSrc} alt={props.imageAlt} />
                </div>

                <h1 className='text-white text-center font-serif font-bold text-lg mb-2'>{props.Header}</h1>
                <div>
                    <p className='text-white text-center font-sans text-sm'>{props.Paragraph}</p>
                </div>
            </div>
        );
    return (
        <div className='w-full flex flex-col sm:justify-center md:justify-normal  md:items-center'>
            <div className='w-full h-1/5 flex justify-center items-center'>
                <img className='w-10 h-12' src={props.imageSrc} alt={props.imageAlt} />
            </div>
            <h1 className='text-white text-center font-serif font-bold text-lg mb-2'>{props.Header}</h1>
            <div>
                <p className='text-white text-center font-sans text-sm'>{props.Paragraph}</p>
            </div>
        </div>
    );
}

export default Feature
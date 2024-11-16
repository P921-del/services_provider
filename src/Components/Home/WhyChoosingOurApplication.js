import React from 'react'
import Features from './Features';

function WhyChoosingOurApplication() {
    const WhyChoosingOurApplicationImage = '../../../assests/WhyChoosingOurApplicationImage.png';
    return (
        <div className='w-full h-[1100px] md:h-[1100px] min-lg:h-[900px] flex sm:flex-col md:flex-row'>
            <div className='w-full h-full md:w-2/5 '><img className='w-full h-full' src={WhyChoosingOurApplicationImage} alt='WhyChoosingOurApplicationImage' /></div>
            <div className='w-full h-full md:w-3/5 bg-[#414042]'>
                <div className='flex flex-col items-center mt-24 mb-10'>
                    <h2 className='text-center font-bold text-5xl font-serif text-white mb-4'>Why Choose Our</h2>
                    <h2 className='text-center font-bold text-5xl font-serif text-white'>Application Services?</h2>
                </div>
                <Features />
            </div>
        </div>
    )
}

export default WhyChoosingOurApplication
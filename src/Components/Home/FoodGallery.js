import React from 'react'
import GalleryCard from './GalleryCard';

export default function FoodGallery() {
    const galleryElementsNames =
        [
            { id: 1, name: 'small delivery program', path: '../../../assests/small-delivery-program.webp' },
            { id: 2, name: `Pre Order Support for Existing Lunch Programs`, path: '../../../assests/Pre-Order-Support-for-Existing-Lunch-Programs.jpg' },
            { id: 3, name: 'Special For Hospitals', path: '../../../assests/Special-For-Hospitals.jpg' },
            { id: 4, name: 'PaymentGives', path: '../../../assests/PaymentGives.png' },
            { id: 5, name: 'Standard Lunch Delivery Program', path: '../../../assests/Standard-Lunch-Delivery-Program.avif' }
        ];
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center mt-28  '>
                <h3 className='text-center font-bold font-sans text-lg text-blue-800 mb-2'>MORE ABOUT OUR PROGRAMS</h3>
                <h1 className='text-center font-bold font-serif text-5xl text-black mb-4'>Food Service Support For</h1>
                <h1 className='text-center font-bold font-serif text-5xl text-black mb-4'>Your Organization</h1>
                <h4 className='text-center text-gray-700 text-base font-sans'>At Our Platform, we specialize
                    in supportintext-center g
                    schools ,hospitals ,clincis and Restaurants</h4>
                <h4 className='text-center text-gray-700 text-base font-sans'>organizations that need to cooridinate in our platform</h4>
            </div>
            <div className='bg-transparent md:mx-0 md:gap-4 mx-auto w-3/4 grid sm:grid-cols-1 sm:grid-rows-5 gap-4 md:grid-cols-2 md:grid-rows-3 mt-28'>
                {galleryElementsNames.map((item) =>
                    <GalleryCard key={item.id} image={item.path} text={item.name} />
                )
                }
            </div>
        </div>
    )
}


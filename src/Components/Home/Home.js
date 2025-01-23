import React from 'react'
import FoodGallery from './FoodGallery'
import GetStartedButton from './GetStartedButton'
import WhyChoosingOurApplication from './WhyChoosingOurApplication'
import LogosSlider from './LogosSlider'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div className='w-full'>

            <FoodGallery />
            <GetStartedButton />
            <WhyChoosingOurApplication />
            <Footer />
        </div>
    )
}

export default Home
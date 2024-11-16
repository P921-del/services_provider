import React from 'react'
import FoodGallery from './FoodGallery'
import GetStartedButton from './GetStartedButton'
import WhyChoosingOurApplication from './WhyChoosingOurApplication'
import LogosSlider from './LogosSlider'

const Home = () => {
    return (
        <div>
            <LogosSlider />
            <FoodGallery />
            <GetStartedButton />
            <WhyChoosingOurApplication />
        </div>
    )
}

export default Home
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Home/Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Hospitals from './Hospitals'
import Schools from './Schools'
import Clinics from './Clinics'
import Restaurants from '../Components/Restaurants/Restaurants.tsx'
import Login from './Account Pages/Login.tsx'
import Register from './Account Pages/Register.tsx'
import ForgotPassword from './Account Pages/ForgotPassword.tsx'


function ProjectRoutes() {
    return (
        <>
            <Routes>
                <Route path="*" element={<h1 className='font-bold'>Page Not Found</h1>} />
                <Route path="/" element={<Home />} />
                <Route path="/hospitals" element={<Hospitals />} />
                <Route path="/schools" element={<Schools />} />
                <Route path="/clinics" element={<Clinics />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
        </>
    )
}

export default ProjectRoutes
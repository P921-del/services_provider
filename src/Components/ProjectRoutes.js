import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Components/Home/Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Hospitals from './Hospitals'
import Schools from './Schools'
import Clinics from './Clinics'
import Restaurants from './Restaurants'

function ProjectRoutes() {
    return (
        <>
            <Routes>
                <Route path="*" element={<h1 style={{ fontSize: "bold" }}>Page Not Found</h1>} />
                <Route path="/" element={<Home />} />
                <Route path="/hospitals" element={<Hospitals />} />
                <Route path="/schools" element={<Schools />} />
                <Route path="/clinics" element={<Clinics />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </>
    )
}

export default ProjectRoutes
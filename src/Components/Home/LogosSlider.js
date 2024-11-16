import React from 'react'
import LogoSlider from './logoSlider';
import Marquee from 'react-fast-marquee';

function LogosSlider() {
    const Logos = [
        {
            id: 1,
            name: "First_School",
            path: "../../../assests/LogosOfSomeOrganizations/First_School.jpg"
        },
        {
            id: 2,
            name: "Second_School",
            path: "../../../assests/LogosOfSomeOrganizations/Second_School.jpg"
        },
        {
            id: 3,
            name: "Third_School",
            path: "../../../assests/LogosOfSomeOrganizations/Third_School.jpg"
        },
        {
            id: 4,
            name: "Fourth_School",
            path: "../../../assests/LogosOfSomeOrganizations/Fourth_School.jpg"
        },
        {
            id: 5,
            name: "Fiveth_School",
            path: "../../../assests/LogosOfSomeOrganizations/Fiveth_School.jpg"
        },
        {
            id: 6,
            name: "Sixth_School",
            path: "../../../assests/LogosOfSomeOrganizations/Sixth_School.jpg"
        },
        {
            id: 7,
            name: "Al-Ramad_Hospital_in_Assiut",
            path: "../../../assests/LogosOfSomeOrganizations/Al-Ramad_Hospital_in_Assiut.jfif"
        },
        {
            id: 8,
            name: "Assiut_University_Student_Hospital",
            path: "../../../assests/LogosOfSomeOrganizations/Assuit_University_Student_Hospital.jpg"
        },
        {
            id: 9,
            name: "Assiut_University_Trauma_Hospital",
            path: "../../../assests/LogosOfSomeOrganizations/Trauma_Hospital_Assuit_University.jpg"
        },
        {
            id: 10,
            name: "Life_Hospital",
            path: "../../../assests/LogosOfSomeOrganizations/Life_Hospital.jfif"
        },
        {
            id: 11,
            name: "Rouvan_Hospital",
            path: "../../../assests/LogosOfSomeOrganizations/Rouvan_Hospital.png"
        },
        {
            id: 12,
            name: "El-Hakeem Clinics",
            path: "../../../assests/LogosOfSomeOrganizations/El-Hakeem Clinics.png"
        },
        {
            id: 13,
            name: "REEM_Clinic",
            path: "../../../assests/LogosOfSomeOrganizations/REEM_Clinic.jpg"
        },
        {
            id: 14,
            name: "Kasr_Clinics",
            path: "../../../assests/LogosOfSomeOrganizations/Kasr_Clinics.png"
        },
        {
            id: 15,
            name: "BAZOOKA_Restaurant",
            path: "../../../assests/LogosOfSomeOrganizations/BAZOOKA_Restaurant.jpg"
        },
        {
            id: 16,
            name: "COOK DOOR_Restaurant",
            path: "../../../assests/LogosOfSomeOrganizations/COOK DOOR_Restaurant.jpg"
        },
        {
            id: 17,
            name: "GOURMET_Restaurant",
            path: "../../../assests/LogosOfSomeOrganizations/GOURMET_Restaurant.jpg"
        }
    ];
    return (
        <div className='flex overflow-hidden space-x-16 w-[90%] mx-auto z-10'>
            {/* <div className='animate-slide '> */}
            <Marquee className='flex flex-nowrap h-32 bg-red-900 overflow-hidden' gradient gradientColor='#04396b' autoFill={true} pauseOnHover={true}>
                {Logos.map((item) => {
                    return (
                        <LogoSlider key={item.id} {...item} />
                    );
                })}
            </Marquee>
            {/* </div> */}
        </div>
    );
}

export default LogosSlider
import React from 'react'
import Feature from './Feature';
function Features() {
    const features = [
        {
            id: 1, imageSrc: '../../../assests/wifi-connection.png', imageAlt: 'wifi-connection'
            , Header: 'Share important health information:'
            , Paragraph: 'Facilitating communication between healthcare providers and patients regarding some informations about famous hospitals in Assuit in Egypt.'
        },
        {
            id: 2, imageSrc: '../../../assests/apple-black-silhouette-with-a-leaf.png', imageAlt: 'apple-black-silhouette-with-a-leaf'
            , Header: 'Great meals made to order and delivered fresh:'
            , Paragraph: 'We provide food from local restaurants and custom caterers that students and public know and love!'
        },
        {
            id: 3, imageSrc: '../../../assests/recycle-symbol.png', imageAlt: 'recycle-symbol'
            , Header: 'Help clinics manage appointments efficiently and reduce no-shows:'
            , Paragraph: 'Facilitating communication between healthcare providers and patients regarding appointments, prescriptions, and follow-up care(treatements).'
        },
        {
            id: 4, imageSrc: '../../../assests/money-bag.png', imageAlt: 'money-bag'
            , Header: 'Payment methods for our clinics:'
            , Paragraph: 'Enhanced Patient Experience: By providing a convenient communication clinics can enhance the overall patient experience and satisfaction.'
        }
    ];
    return (
        <div className='grid grid-cols-1 grid-rows-4 w-3/4 h-[70%] md:grid-cols-2 md:grid-rows-2 mx-auto mt-14  md:gap-x-10 '>
            {
                features.map((feature) => <Feature key={feature.id} id={feature.id} {...feature} />)
            }
        </div>
    )
}

export default Features
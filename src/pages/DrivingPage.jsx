import React from 'react'
import { Navbar } from '../components'
import Map from '../components/Driving/Map'
import Driving from '../components/Driving/Driving'
import ProtectedRoute from '../protectedRoute/ProtectedRoute'

const DrivingPage = () => {
    return (
        <>
            <ProtectedRoute>
                <Navbar />
                <section className='relative w-ful md:m-10 m-4 h-[34rem] md:h-[32rem] md:w-11/12  border shadow-lg  rounded-xl '>
                    <Map />
                    <Driving />
                </section>
            </ProtectedRoute>
        </>
    )
}

export default DrivingPage
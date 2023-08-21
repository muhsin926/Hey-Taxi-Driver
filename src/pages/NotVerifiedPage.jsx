import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { backgroundImg } from '../assets'
import { Navbar } from '../components'

const NotVerifiedPage = () => {
     const [isVerified, setIsVerified] = useState()
    const getDriver = async () => {
        const token = localStorage.getItem('token');
        const { data } = await axios.get(`${import.meta.env.VITE_SERVER_DOMAIN}/api/driver/available`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (!data?.driver?.verify) {
            return false;
        }
        return true;
    };

    useEffect(() => {
        const verifyDriver = async () => {
            const accVerify = await getDriver();
            setIsVerified(accVerify);
        };
        verifyDriver();
    }, []);

    return (
        <>
            {!isVerified ? (
                <><Navbar /><main className='h-[37rem]'>
                    <div className='flex flex-col justify-center items-center h-full '>
                        <img src={backgroundImg} className='w-full h-full blur-2xl' alt="" />
                        <div className='absolute flex flex-col justify-center items-center'>
                            <h1 className='text-3xl font-poppins font-semibold  '>Account not verified</h1>
                            <h1 className='text-gray-900 text-base'>Please wait for verify admin</h1>
                        </div>
                    </div>
                </main></>
            ) : (
                <><Navbar /><main className='h-[37rem]'>
                    <div className='flex flex-col justify-center items-center h-full '>
                        <img src={backgroundImg} className='w-full h-full blur-2xl' alt="" />
                        <div className='absolute flex flex-col justify-center items-center'>
                            <h1 className='text-3xl font-poppins font-semibold  '>Account has been  verified</h1>
                            <Link to={'/'}><button className='py-2 px-4 mt-2 rounded text-white bg-gray-900 text-base'>Continue to dashboard</button></Link>
                        </div>
                    </div>
                </main></>
            )}
        </>
    )
}

export default NotVerifiedPage
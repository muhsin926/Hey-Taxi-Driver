import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useVerify = () => {
    const [isVerified, setIsVerified] = useState();

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
    
    return isVerified;
};

export default useVerify;

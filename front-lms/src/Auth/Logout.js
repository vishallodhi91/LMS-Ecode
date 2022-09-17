import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const Logout = () => {
    const navigate = useNavigate();

    useEffect(async () => {

        let user = JSON.parse(localStorage.getItem('user-info'));
        const token = user.token
        let response = await fetch("http://127.0.0.1:8000/api/logout", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'Authorization':  `Bearer ${token}`
            },
        });
        response = await response.json();
        console.log(token)
        localStorage.clear();
        navigate('/');
        window.location.reload()
    }, []);

    return (
        <div>Processing...</div>
    )
}

export default Logout
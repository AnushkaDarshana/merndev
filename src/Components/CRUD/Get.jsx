import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Get = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/get-message')
            .then(res => setMessage(res.data.message))
            .catch(() => setMessage('Error fetching from server'));
    }, []); 

    return (
        <div>
            <h2>Retrieve from Database:</h2>
            <p>{message}</p>
        </div>
    );
};

export default Get;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Get = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/get-message')
            .then(res => console.log(res.data.data.messages))
            .catch(() => setMessage('Error fetching from server'));
    }, []); 

    return (
        <div>
        <h2>Retrieve from Database:</h2>
      </div>
    );
};

export default Get;

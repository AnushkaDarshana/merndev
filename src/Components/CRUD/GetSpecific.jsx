import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetSpecific = () => {
    const [id, setId] = useState(''); // Initialize with an empty string
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/get-message/${id}`)
                .then(res => {
                    setMessage(res.data.message);
                    setError(''); // Clear any previous errors
                })
                .catch(() => {
                    setError('Error fetching message from server');
                    setMessage(''); // Clear any previous messages
                });
        }
    }, [id]); // This effect runs whenever the ID changes

    return (
        <div>
            <h2>Fetch Specific Message Only from Database</h2>
            
            <input 
                type="text"
                placeholder="Enter ID to fetch message"
                value={id}
                onChange={e => setId(e.target.value)}
            />

            {message && <p>Message: {message}</p>}
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    );
};

export default GetSpecific;

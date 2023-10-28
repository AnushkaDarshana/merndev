import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Get = () => {
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/get-message')
            .then(res => {
                if (res.data.status === 'success' && res.data.data.messages) {
                    setMessages(res.data.data.messages);
                } else {
                    setError('Unexpected response format from server');
                }
            })
            .catch(() => setError('Error fetching from server'));
    }, []); 

    return (
        <div>
            <h2>Retrieve from Database:</h2>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message.message}</li> // Assuming each message has a 'content' field
                ))}
            </ul>
        </div>
    );
};

export default Get;

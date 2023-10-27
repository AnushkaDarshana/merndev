import React, { useState } from 'react';
import axios from 'axios';

const Post = () => {
    const [message, setMessage] = useState('');

    const sendToServer = () => {
        axios.post('http://localhost:5000/post-message', { message })
            .catch(() => console.error('Error sending to server')); // Logging the error if there's any
    };

    return (
        <div>
            <h2>Post to Database</h2>
            <input 
                type="text" 
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button onClick={sendToServer}>Send</button>
        </div>
    );
};

export default Post;

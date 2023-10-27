const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


//Post Request
app.post('/change-message', (req, res) => {
    const clientMessage = req.body.message;
    // Add to database
});

let serverMessage = 'Hello from the server!';

//Get Request
app.get('/get-message', (req, res) => {
    res.json({ message: serverMessage });
});

// Simulating a database with an in-memory object
let messagesDatabase = {
    '1': 'Message for ID 1',
    '2': 'Message for ID 2',
    '3': 'Message for ID 3',
};

// Put Request to update the message for a specific ID
app.put('/update-message/:id', (req, res) => {
    const { id } = req.params;
    const newMessage = req.body.message;

    if (id && newMessage) {
        if (messagesDatabase[id]) { // Check if the ID exists in our "database"
            messagesDatabase[id] = newMessage; // Update the message for the given ID
            res.status(204).send(); // 204 No Content response
        } else {
            res.status(404).send(); // 404 Not Found if the ID doesn't exist
        }
    } else {
        res.status(400).send(); // 400 Bad Request if ID or message is missing
    }
});


// Get current message for a specific ID
app.get('/get-message/:id', (req, res) => {
    const { id } = req.params;
    if (messagesDatabase[id]) {
        res.json({ message: messagesDatabase[id] });
    } else {
        res.status(404).json({ status: 'ID not found.' });
    }
});

// Delete message for a specific ID
app.delete('/delete-message/:id', (req, res) => {
    const { id } = req.params;
    if (messagesDatabase[id]) {
        delete messagesDatabase[id]; // Delete the message for the given ID
        res.status(204).send(); // 204 No Content response
    } else {
        res.status(404).send(); // 404 Not Found if the ID doesn't exist
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

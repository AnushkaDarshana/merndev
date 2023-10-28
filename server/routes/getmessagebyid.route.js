const express = require('express');
const Message = require('../Database/models/messages');

const router = express.Router();

router.get('/:msg', async (req, res) => {
    try {
        const message = await Message.findOne({ message: req.params.msg });

        if (!message) {
            return res.status(404).json({
                status: 'Failed',
                message: 'No message found with that ID'
            });
        }

        res.status(200).json({
            status: 'success',
            data: {
                message
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err.message
        });
    }
});

module.exports = router;

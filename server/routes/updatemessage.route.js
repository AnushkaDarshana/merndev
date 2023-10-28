const express = require('express');
const Message = require('../Database/models/messages');

const router = express.Router();

router.put('/:id',async (req,res) => {
    try {
        const updateMessage = await Message.findByIdAndUpdate(
          req.params.id,
          { message: req.body.newMessage },
          { new: true, runValidators: true }
        );
      
        res.status(200).json({
          status: 'success',
          data: {
            updateMessage: updateMessage
          }
        });
      } catch (err) {
        res.status(500).json({
          status: 'Failed',
          message: err
        });
      }
})

module.exports = router
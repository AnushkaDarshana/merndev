const express = require('express');
const Message = require('../Database/models/messages');

const router = express.Router();

router.post('/',async(req,res)=>{
    try{
        const message = new Message(req.body);
        await message.save();
        res.status(200).json({
            status: 'success',
            data:{
                message
            }
        })
    }catch(err){
        res.status(500).json({
            status:'Failed',
            message: (err)
    });
    }

})

module.exports = router
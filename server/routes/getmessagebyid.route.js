const express = require('express');
const Message = require('../Database/models/messages');

const router = express.Router();

router.get('/:id',async (req,res)=>{

    const message = await Message.findById(req.params.id);
    try{
        res.status(200).json({
            status: 'success',
            data:{
                message
            }
        })
    }catch(err){
        res.status(500).json({
            status:'Failes',
            message: err
        });
    }
})

module.exports = router
const express = require('express');

const router = express.Router();

router.get('/login',(req, res)=>{
    res.send('for login')
})

router.post('/register',(req,res)=>{
    res.send('for register');
    
})

router.patch('/updateUser:id',(req,res)=>{
    res.send(req.params.id);
})

router.delete('/deleteUser:id',(req,res)=>{
    res.send(req.params.id);
})

module.exports = router;
const express = require('express');
const router = express.Router()
const User = require('../models/user')

router.get('/', async(req,res)=>{
    try{
        const users = await User.find()
        res.json(users)
    }catch(err){
        res.send('Error '+ err)
    }
})

router.get('/:id', async(req,res)=>{
    try{
        const user = await User.findById(req.params.id )
        res.json(user)
    }catch(err){
        res.send('Error '+ err)
    }
})

router.post('/', async(req,res)=>{
    const user = new User({
        fName: req.body.fName,
        lName: req.body.lName,
        email:req.body.email
    })

    try{
        const a1 = await user.save()
        res.json(a1);
    }catch(err){
        res.send('Error' + err)
    }
}) 


router.patch('/:id', async(req,res)=>{

    const user = await User.findById(req.params.id)
    if(req.body.name != null){
         user.fName = req.body.fName
    }
    if (req.body.lName != null){
        user.lName = req.body.lName
    }
    if (req.body.email != null){
        user.email = req.body.email
    }

    try{
        const updatedUser = await user.save()
        res.json(updatedUser)
    }catch(err){
        res.send({message: err.message})
    }
        

})



router.delete('/:id',async(req,res)=> {
    try{
        const user = await User.findById(req.params.id) 
        const a1 = await user.remove()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})


module.exports = router;

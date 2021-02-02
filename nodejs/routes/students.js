const express= require('express');
const router=express.Router();
const student=require("../models/students");

router.post('/',(req,res)=>{
    student.create({
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        Age:req.body.Age,
        Mobile:req.body.Mobile,
        Email:req.body.Email
    },(err,student)=>{
        errMsg="Can't add student"
        if(err){
            res.status(500).send(errMsg + err)
        }else{
            res.status(200).send(student)
        }
    })
})

router.get('/',(req,res)=>{
    student.find({},(err,student)=>{
        if(err){
            res.status(404).send("errrror" + err)
        }else{
            res.status(200).send(student)
        }
    })
})
router.delete('/:Email',(req,res)=>{
    student.findOneAndDelete({Email:req.params.Email},(err,student)=>{
        if(err){
            res.status(404).send("can't remove student" + err)
        }else{
            res.status(200).send(student)
        }
    })
})
router.put('/:Email',(req,res)=>{
    student.updateOne({Email:req.params.Email},req.body,(err,student)=>{
        if(err){
            res.status(404).send("can't update the student" +err)
        }else{
            res.status(200).send(student)
        }
    })
})
module.exports=router;
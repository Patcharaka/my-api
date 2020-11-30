const router = require('express').Router()
const Member = require('../models/member')

router.route('/add').post((req,res)=>{
const newMember = new Member({title:req.body.title,firstName:req.body.firstName,lastName:req.body.lastName,gender:req.body.gender,msisdn:req.body.msisdn,expectedSalary: req.body.expectedSalary})
newMember
.save()
.then(()=> res.json('Add Member Successfully'))
.catch((err) => res.status(400).json('Error : +err'))
    })    

module.exports = router


const express = require("express");
const {body, validationResult} = require("express-validator");
const router = express.Router();

const Users = require("../models/user.model");

router.post("/", 
    body("name").isLength({min: 1}).isString().withMessage("Name s required"),
    body("code").isLength({min: 3}).isString().withMessage("Code is required"),
    body("active").isBoolean().withMessage("Active is required"),
    async (req,res)=>{
       const errors = validationResult(req);
       if(!errors.isEmpty()){
           res.status(400).json({data: errors.array()})
       }
        const user = await Users.create(req.body);
        res.status(201).json({data: user})
})

router.get("/", async (req,res)=>{
   const user = await Users.find({});
   res.status(201).json({data: user})
})

module.exports = router;
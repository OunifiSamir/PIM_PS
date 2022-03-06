const express = require("express");
const CRA = require("../models/CRA.models");
const bcrypt = require("bcrypt");
const key = require('../config/keys')
const jwt = require('jsonwebtoken')
const router = express.Router();
const passport = require('passport');
const validateLogin = require('../validator/Login')
const validateRegister = require('../validator/Register')

router.get("/test", (req, res) => res.json("work pages users"));

router.post("/tables", (req, res) => {
 
 
      const newCRA = new CRA({
        Project: req.body.Project,
        Activite: req.body.Activite,
        DateR: req.body.DateR,
        Nombreh: req.body.Nombreh,
        Status: req.body.Status,

      });

      
      newCRA.save()
            .then((newCRA) => res.json(newCRA))
            .catch((err) => res.send(err));
       
    
 
});



router.get('/current', passport.authenticate('jwt', {session: false}), (req , res)=>{
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    })
})

module.exports = router;

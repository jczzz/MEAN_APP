const express = require('express');
const router = express.Router();
const Contact_model = require('../models/contact');


router.get('/contacts', function (req, res, next) {
    //调用mongodb里的 find()操作，sort()操作, exec()操作
    Contact_model.find()
                 .exec(function (err, contacts) {
                        if (err) { return next(err) };
                        res.json(contacts); 
    });
    
  });

  router.post('/contacts', function (req, res, next) {

        var contact = new Contact_model({
            name: req.body.name,
            email: req.body.email,
            phone: {
                mobile: req.body.phone.mobile,
                work: req.body.phone.work
            }
            
        });
      contact.save().then((err,contact)=>{
          if(err){return next(err)};
          res.status(201).json(contact);
      });

});

module.exports= router;
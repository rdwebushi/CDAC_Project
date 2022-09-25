// define function for user registration  and signup

// to save data in mongodb 

const mongoose=require('mongoose');
const passport = require('passport');

const _ =require('lodash');
const User=mongoose.model('users');

module.exports.register= (req,res,next)=>{
 //    console.log('inside register function');
    var user= new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.dateofbirth = req.body.dateofbirth;
    user.address = req.body.address;
    user.pregnancyMonth = req.body.pregnancyMonth;
    user.contactNo = req.body.contactNo;

    user.save((err, doc)=>{
        if(!err)
            res.send(doc);
        else
        {
            if (err.code == 1100)
                res.status(422).send(['Duplicate email address found']);
            else
            return next(err);
        }

    });

}

//need router to route things 

module.exports.authenticate=(req, res, next)=>{
    // call for passport authentication
    passport.authenticate('local', (err, user, info)=>{
        // error from passport middleware
        if(err) return res.status(400).json(err);
        //registered user
        else if(user) return res.status(200).json({"token":user.generateJwt()});
        //unknown user or wrong password
        else return res.status(404).json(info);
    })(req,res);
}
module.exports.patient=(req,res,next)=>{
    User.findOne({_id:req._id},
        (err,user)=>{
            if(!user)
            return res.status(404).json({status:false, message:'user record not found'});
            else
            return res.status(200).json({status:true, user: _.pick(user,['fullName','email','dateofbirt','address','pregnancyMonth','contactNo'])});
               
        }
        );
}


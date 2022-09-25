const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

//generate jwt 
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required:'Full name cant be empty',
        unique:true
    },
    email:{
        type: String,
        required:'email cant be empty',
        unique: true
    },
    password:{
        type: String,
        required:'password is require',
        minlength:[4,'Password mus be grater or equal to 4']
    },
    dateofbirth:{
        type:Date,        
    },
    address:{
        type:String,
    },
    contactNo:{
        type:String,
    },
    PregnencyMonth:{
        type:Number,
    },
    saltSecret:String
});

//events
userSchema.pre('save', function(next){
    bcrypt.genSalt(10,(err, salt)=>{
    bcrypt.hash(this.password, salt,(err,hash)=>{
        this.password=hash;
        this.saltSecret=salt;
        next();
     });
    });
});
 //methods
 userSchema.methods.verifyPassword=function(password){
    return bcrypt.compareSync(password,this.password);
 };
//jwt
userSchema.methods.generateJwt =function(){
    return jwt.sign({_id:this._id},
        process.env.JWT_SECRET);
}

mongoose.model('users', userSchema);
// add this file to db.js file
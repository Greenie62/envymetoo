const  LocalStrategy = require('passport-local').Strategy;
const db = require('../models')
const {checkPassword} = require('./hashPassword')


console.log(db.Member)


module.exports = function (passport){


     function authUser(username,password,done){

        console.log("AuthUser:",username,password);

         db.Member.findOne({username})
         .then(async(dbuser)=>{

        console.log(dbuser)
         

         if(!dbuser){
            return done(null,false,{message:"Thats not brat! Try signing up!"})
        }
        if(password.length > 10){
        let result = await checkPassword(dbuser[0].password,password)
        console.log("Result:",result)
        
        if(!result){
            return done(null,false,{message:"Invalid password, thats not it!"})
        }
        else{
            return done(null,dbuser)
        }
    }
    else{
        if(password !== dbuser.password){
            return done(null,false,{message:"Invalid password, thats not it!"})

        }
        else{
            return done(null,dbuser)
        }
    }
    
        
    })
    }

    passport.use(new LocalStrategy({usernameField:'username'},authUser));
    passport.serializeUser((user,done)=>done(false,user));
    passport.deserializeUser((user,done)=>done(false,user))
}



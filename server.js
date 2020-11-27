const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const passport = require('passport');
const layouts = require("express-ejs-layouts");
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const redis = require('redis')
const RedisStore = require("connect-redis")(session)
let redisClient = redis.createClient

// const { graphQLTTP } = require('express-graphql')


const routes = require("./routes");
// const schema = require("./schema")

const app = express();
const PORT = process.env.PORT || 3005;

mongoose.connect(`mongodb+srv://brat:booba@cluster0.lfuba.mongodb.net/envymetoodb?retryWrites=true&w=majority`,
{useNewUrlParser: true, useUnifiedTopology: true },
    ()=>{
    console.log("mongodb connected")
})

app.set('view engine','ejs');
app.use(express.static("public"))

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"))

app.use(layouts)
app.use(flash())
app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:false,
    // store: new RedisStore({ client: redisClient })
}))

// app.use("/graphql",graphQLHTTP({
//     schema,
//     graphiql:true
// }))


app.use(passport.initialize());
app.use(passport.session())

app.use(routes)


app.use(urlError)
app.use(errorHandler)



function urlError(req,res,next){
    res.status(404)
    let error = new Error(`Error -- ${req.originalUrl}`)
    next(error)
}


function errorHandler(err,req,res,next){
    res.status(500);
    res.json({
        message:err.message,
        stack:err.stack,
        custom:"Hey goof, you went a bit off trail!"
    })
}






app.listen(PORT,console.log(`Logged onto port ${PORT}, ${process.env.USER}`))
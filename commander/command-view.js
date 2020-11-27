const program = require("commander");
const db = require("../models");
const mongoose = require('mongoose')


mongoose.connect(`mongodb+srv://brat:booba@cluster0.lfuba.mongodb.net/envymetoodb?retryWrites=true&w=majority`,
{useNewUrlParser: true, useUnifiedTopology: true },
    ()=>{
    console.log("mongodb connected")
})



program.command("client")
       .description("View clients")
       .alias("c")
       .action(()=>{
           console.log("viewClients fired")
       })

       .command("item")
       .description("View items")
       .alias("i")
       .action(()=>{
           console.log("viewItems fired")
       })

       .parse(process.argv)
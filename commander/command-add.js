const program = require("commander");
const {prompt} = require('inquirer')
const db = require("../models");
const clientjson = require('./clientjson.json');
const itemjson = require("./itemjson.json");
const mongoose = require('mongoose')


mongoose.connect(`mongodb+srv://brat:booba@cluster0.lfuba.mongodb.net/envymetoodb?retryWrites=true&w=majority`,
{useNewUrlParser: true, useUnifiedTopology: true },
    ()=>{
    console.log("mongodb connected")
})



program.command("client")
       .description("Add clients")
       .alias("c")
       .action(()=>{
           console.log("addClients fired")
           prompt(clientjson)
           .then(dbclient=>{
               console.log(dbclient);
               db.Member.create(dbclient)
               .then(dbmember=>{
                   console.log(dbmember)
                   process.exit()
               })
           })

       })

  program.command("item")
       .description("Add items")
       .alias("i")
       .action(()=>{
           console.log("addItems fired")
           prompt(itemjson)
           .then(dbitem=>{
               console.log(dbitem);
               db.Item.create(dbitem)
               .then(dbitem=>{
                   console.log(dbitem)
                   process.exit()

               })
           })
       })

   program.parse(process.argv)
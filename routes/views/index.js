const router = require('express').Router();
const db = require("../../models")
const filterItems = require("../../utils/filterItems")
const path = require("path")


const { isNotAuthenticated, isAuthenticated } = require('../../utils/authenticateUser')


router.get("/",(req,res)=>{
    res.redirect('/login')
})


router.get("/login",isAuthenticated,(req,res)=>{
    res.render('login')
})

router.get("/dashboard",isNotAuthenticated,async(req,res)=>{
    let items = await db.Item.find()
    let data = await filterItems(db)
    console.log(data)
    res.render('dashboard',{user:req.user.username,
                            items,
                            electronics:data.electronics,
                            sports:data.sports,
                            tools:data.tools,
                            food:data.food,
                            furniture:data.furniture
                        })
})




router.get("/admin",async(req,res)=>{

    let members = await db.Member.find();
    let items = await db.Item.find();
    res.render("admin",{members,items})
})


router.get("/itemdata",(req,res)=>{
    res.sendFile(path.join(__dirname, "../../public/data.html"))
})

router.get("/fetchitemdata",async(req,res)=>{
    let items = await db.Item.find();
    res.json(items)
})


router.delete("/logout",(req,res)=>{
    console.log("/logout fired", req.isAuthenticated())
    req.logOut();
    console.log("Authenicated:",req.isAuthenticated())
    res.redirect('/login')
})











module.exports = router;
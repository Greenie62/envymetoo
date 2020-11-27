const router = require('express').Router();
const db = require('../../models');
const { hashPassword, checkPassword } = require('../../utils/hashPassword');
const passport = require("passport");

require('../../utils/passport-local')(passport)


router.post("/register",async(req,res)=>{
    console.log(req.body)

    let hashPw = await hashPassword(req.body.password);
    req.body.password = hashPw;

    console.log(req.body)
    db.Member.create(req.body)
    req.body.password = hashPw;

})


router.post("/login",passport.authenticate("local",{
    failureRedirect:"/login",
    successRedirect:"/dashboard",
    failureFlash:true
}))


router.post('/additem',(req,res)=>{
    console.log("/db/additem fired",req.body);

    db.Item.create(req.body)
    .then(dbitem=>{
        console.log(dbitem)
        res.redirect('/dashboard')
    })
})


router.post('/admin/additem',(req,res)=>{
    console.log("/db/additem fired",req.body);

    db.Item.create(req.body)
    .then(dbitem=>{
        console.log(dbitem)
        res.redirect('/admin')
    })
})



router.post('/admin/adduser',async(req,res)=>{
    console.log("/db/adduser fired",req.body);

    let hash = await hashPassword(req.body.password);

    req.body.hash = hash;

    db.Member.create(req.body)
    .then(dbmember=>{
        console.log(dbmember)
        res.redirect('/admin')
    })
})


router.get('/getinfo/:item',(req,res)=>{
    console.log(req.params.item)
    db.Item.find({itemname:req.params.item})
    .then(dbitem=>{
    res.json({msg:"request received!",item:dbitem[0]})
    })
})


router.delete('/remove/:table/:item',(req,res)=>{
    let {table, item} = req.params;

    console.log(table,item);

    switch(table){

        case "item":
            db.Item.findOneAndDelete({itemname:item})
            .then(dbitem=>{
                console.log(dbitem.itemname + " was deleted.")
            })
        break;

        case "member":
            db.Member.findOneAndDelete({username:item})
            .then(dbmember=>{
                console.log(dbmember.username + " was deleted.")
            })
        break;
    }
    res.redirect('/admin')
})




module.exports = router
const router = require('express').Router();
const db = require('../../models')



router.get('/:collection',(req,res)=>{
    console.log("/api got pinged!")
    switch(req.params.collection){

        case "members":
            console.log("member fired!")
            db.Member.find()
            .then(dbmembers=>{
                console.log(dbmembers)
                res.json(dbmembers)
            })
        break;

        case "items":
            db.Item.find()
            .then(dbitems=>{
                res.json()
            })
    }
})



module.exports = router;
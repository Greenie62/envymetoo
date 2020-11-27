


function isAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return res.redirect('/dashboard')
    }
    next()
}


function isNotAuthenticated(req,res,next){
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next()
}

module.exports = { isNotAuthenticated, isAuthenticated }
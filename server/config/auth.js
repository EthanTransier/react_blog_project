// ensures that the user has authenticated
const ensureAuthenticated = (req, res, next)=>{
    if(req.isAuthenticated()){
        res.json({status: 200, data:true})
    } else {
        res.json({status: 401, data:false})
    }
}

module.exports = {ensureAuthenticated}
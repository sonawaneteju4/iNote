const jwd = require('jsonwebtoken');

const fetchuser = (req, res, next)=>{
    //Get user From the jwt token and id to req object
    const token = req.header('auth-token');
    
    
    next()

}


module.exports = fetchuser;
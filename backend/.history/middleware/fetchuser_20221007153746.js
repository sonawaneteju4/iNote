const jwd = require('jsonwebtoken');

const fetchuser = (req, res, next)=>{
    //Get user From the jwt token and id to req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: "Please Authenticate Using Valid Token"})
    }
    const string = jwt.verify(token, )
    next()

}


module.exports = fetchuser;
const jwd = require('jsonwebtoken');
const JWT_SECRET = "Tejas Is Goof Boy";

const fetchuser = (req, res, next)=>{
    //Get user From the jwt token and id to req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: "Please Authenticate Using Valid Token"})
    }
    const string = jwt.verify(token,0 )
    next()

}


module.exports = fetchuser;
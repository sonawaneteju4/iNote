const { Router } = require('express');
const express = require('express');
const express = express.Router();

router.get('/', (req, res)=>{
    obj = {
        a: "this",
        number: 34
    }
    res.json(obj)
})



module.exports = router
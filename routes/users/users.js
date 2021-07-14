const express = require('express');
const router = express.Router();
const messages = require('../../util/messageCode.json').users;


const {findUser, saveUser} = require('../../service/users/users');


router.get('/', async(req, res)=>{
    console.log(' ## routes hit ### ');
    const data = await findUser();
    const responseReceived = data.length !== 0; // CONDITION FOR ARRAY RESPONSE
            res.status(responseReceived ? 200 : 404);
            res.json({
                status: responseReceived,
                message: responseReceived ? messages.find[200] : messages.find[404],
                data: data,
            });
});

router.post('/', async(req, res)=>{
    console.log(' ##  post routes hit ### ', req.body);
    const body = req.body;
    const data = await saveUser(body);
    res.send(data);  
});

module.exports = router;
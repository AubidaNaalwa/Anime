const express = require('express')
const Users = require('../Models/Users')
const router = express.Router()

router.get('/test', (req, res) => {
    res.status(303).send("you are connected")
})

router.post('/login', (req, res) => {

    if (!req.body.username || !req.body.password ) {
        res.status(303).send(
            { msg: "missing info" }
        )
    }

    Users.findOne({ username: req.body.username, password: req.body.password }, function (err, obj) {
        if (err) {
            res.status(404).send(
                { msg: "missing info", err: 1 }
            )
        } else {
            res.status(200).send(
                { err: 0 , msg:"LogIn succesful"}
            )
        }
    })

})

router.post('/signUp', (req, res) => {
    if (!req.body.username || !req.body.password || !req.body.name) {
        res.status(303).send(
            { msg: "missing info" }
        )
    }

    const user = new Users({ username: req.body.username, password: req.body.password, name: req.body.name })
    user.save()
    res.status(200).end()

})



module.exports = router
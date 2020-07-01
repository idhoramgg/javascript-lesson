const express = require('express');
const app = express();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

app.use(express.json())


const users = []

// verifikasi token
const verifyToken = (req, res, next) => {
    //get auth header value
    const bearerHeader = req.headers['authorization'];
    //cek jika bearer undefined
    if(typeof bearerHeader !== "undefined"){
        //kasih spasi menggunakan split
        const bearer = bearerHeader.split(' ');
        // ambil token dari array
        const bearerToken = bearer[1];
        // set tokennyua
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', async (req, res) => {
    try {
        // const salt = await bcrypt.genSalt()
        // const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        // console.log(salt)
        console.log(hashedPassword)
        
        const user = {username: req.body.username,
        password: hashedPassword}

        jwt.sign({user}, 'secret', {expiresIn: '10h'}, (error, token) => {   
            if(error){
                console.log(error)
                
            } else {
                res.json({
                    token,
                })    
            }             
        })

        users.push(user)
        res.json({
            status: 200,
            message: 'Success'
        })
    
    } catch(err) {
        res.status(500).send()
        console.log(err);
        
    } 
})

app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name === req.body.name)
    if(user == null){
        res.status(400).send(`cannot find user`)
    }
    try {
        if(await bcrypt.compare(req.body.password, user.password)) {
            res.status(200).send(`Success`)
        } else {
            res.status(400).send(`Not allowed`)
        }

    } catch(error) {
        res.status(500).send()
       
        
    }
})

app.post('/users/posts', verifyToken, (req, res) => {
    const newPost = req.body.post
    jwt.verify(req.token, 'secret', (err, authData) => {
        if(err) {
            res.sendStatus(403);
            
        } else {
            res.json({
                message: `Post Created.....`,
                comment : newPost,
                authData
            })
        }
    })
})




app.listen(4000, () => console.log(`server is running`))
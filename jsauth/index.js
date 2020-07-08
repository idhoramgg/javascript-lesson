const express = require('express');

const app = express();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const cors = require('cors')



app.use(express.json())
app.use(cors())



app.use(express.urlencoded({ extended: true }));


const users = []
const posts =['secret page']

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



app.post('/users/register', async (req, res) => {
    try {
        // const salt = await bcrypt.genSalt()
        // const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        // console.log(salt)
        // console.log(hashedPassword)
        
        const user = {username: req.body.username,
        password: hashedPassword}

        jwt.sign({user}, 'secret', {expiresIn: '10h'}, (error, token) => {   
            if(error){
                console.log(error)
                
            } else {
                console.log(token); // check token for testing
                
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
            res.redirect('/dashboard')
            console.log(token);
        } else {
            res.status(400).send(`Not allowed`)
        }

    } catch(error) {
        res.status(500).send()
       
        
    }
})

app.post('/users/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secret', (err, authData) => {
        if(err) {
            res.sendStatus(403);
            
        } else {
            res.json({
                message: `Welcome`,
                comment : posts,
                authData
            })
        }
    })
})



app.listen(4000, () => console.log(`server is running`))
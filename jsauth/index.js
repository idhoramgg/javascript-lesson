const express = require('express');
const app = express();
const bcrypt = require('bcryptjs')

app.use(express.json())


const users = []
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
        users.push(user)
        res.status(201).send()
    
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


app.listen(4000, () => console.log(`server is running`))
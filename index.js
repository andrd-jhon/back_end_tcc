const express = require('express')
const cors = require('cors')

const routerUser = require('./routes/userRoute')

const app = express()

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', routerUser);

app.listen(5000, () => {
    console.log('backend funcionando!')
})
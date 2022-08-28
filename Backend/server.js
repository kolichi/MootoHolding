import  express  from "express";
import bodyParser from "body-parser"
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import User from './Models/user.js';
import bcrypt from "bcrypt"; 
import cors from 'cors';


await mongoose.connect('mongodb://localHost:27017/auth',{useNewUrlParser:true, useUnifiedTopology:true});

const db = mongoose.connection;
db.on('error', console.log)

const app = express()

app.use(cookieParser());
app.use(bodyParser.json({extended:true}));
app.use(cors( {
     credentials:true,
     origin: 'http://localhost:3000', 
}));

app.get('/', (req, res) => {

    res.send('ok')
});

app.post('/SignUp', (req, res) => {
const {first_name, last_name, Contact_number, password} = req.body; 
const hashedPassword = bcrypt.hashSync(password, 10);
const user = new User({first_name:first_name,last_name:last_name,Contact_number:Contact_number, password:hashedPassword})
});

User.save().then((userInfo) => {
    console.log(userInfo)
    res.send('')
}).catch((err) => {
    console.log()
});

app.listen(4000);
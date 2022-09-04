import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import User from "./Models/user.js";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";

const secret = "secret123";

await mongoose.connect("mongodb://localHost:27017/auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.log);

const app = express();

app.use(cookieParser());
app.use(bodyParser.json({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send("server is conected");
});

app.get('/user', (req, res) => {
    const payload = jwt.verify(req.cookies.token, secret);
    User.findById(payload.id)
    .then(userInfo =>{
        res.json({id:userInfo._id, Contact_number:userInfo.Contact_number}); 
    });
}
);

app.post("/SignUp", (req, res) => {
  const { first_name, last_name, Contact_number, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  const user = new User({
    first_name,
    last_name,
    Contact_number,
    password: hashedPassword,
  });

  user.save().then((userInfo) => {
    jwt.sign(
      { id: userInfo._id, Contact_number: userInfo.Contact_number },
      secret,
      (err, token) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res.cookie('token', token).json({id:userInfo._id, Contact_number:userInfo.Contact_number});
        }
      }
    );
  });
});

app.post('/SignIn', (req, res) => {
    const {Contact_number, password} =req.body;
    const user = User.findOne({Contact_number})
  
    user.then(userInfo => {
        const passOk = bcrypt.compareSync(password, userInfo.password);

        if (passOk) {
            jwt.sign({id:userInfo._id, Contact_number}, secret, (err,token) => {
              
                   res.cookie('token', token).json({id:userInfo._id, Contact_number:userInfo.Contact_number});
                  
            })
        } else if(!user || !passOk){
          res.sendStatus(401)
        }
        
    }).catch((error)=>{
      console.log(error)
      
    })
});

app.post('logout', (req, res) => {
    res.cookie('token', '').send();
})

app.listen(4000);


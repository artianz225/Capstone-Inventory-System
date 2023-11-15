import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Registered from "./models/RegisterAccounts.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3001;
const url = process.env.MONGODB_URI;

mongoose.set('strictQuery', false);
mongoose.connect(url);

app.use(express.json());
app.use(cors());
app.use(requestMethosLogger);
app.use(express.static('dist'));

function pageNotFound(req, res) {
  res.status(404).send({error: "Page not found"});
}

function requestMethosLogger(req, res, next) {
  console.log(`Method: ${req.method}`);
  console.log(`Path: ${req.path}`);
  console.log(`Body: `, req.body);
  next();
}

function generateId() {
  const userMaxId = registrationUsersData.length > 0 ? Math.max(...registrationUsersData.map(user => user.id)) : 0;

  return userMaxId + 1;
}

app.get('/', (req, res) => {
  res.send('<h1>Welcome to AA Pharma Inventory System</h1>')
});

app.post('/api/registrationUsersData', (req, res) => {
  const user = req.body;
  const pass = req.body;

  if (!user.username && !pass.password) {
    return res.status(400).json({error: 'please enter Username and Passowd'})
  }
  if (!user.username) {
    return res.status(400).json({error: 'please enter username'})
  }
  if (!pass.password) {
    return res.status(400).json({error: 'please enter password'})
  }

  const registered = new Registered ({
    username: user.username,
    password: pass.password,
  });
  
  registered.save().then(newRegistered => {
    res.status(201).json(newRegistered);
  })
});

app.get('/api/registrationUsersData', (req, res) => {
  Registered.find({}).then((registrationUsersData) => {
    res.json(registrationUsersData);
  })
});

app.get('/api/registrationUsersData/:id', (req, res) => {
  const id = (req.params.id);
  Registered.findById(id).then(result => res.json(result));
});

app.put("/api/registrationUsersData/:id", (req, res) => {
  const id = req.params.id;
  const updateData = req.body; 

  Registered.findByIdAndUpdate(id, updateData, { new: true })
    .then(updatedRecord => {
      if (updatedRecord) {
        console.log('Account Updated:', updatedRecord);
        res.json(updatedRecord);
      }
    })
});

app.delete("/api/registrationUsersData/:id", (req, res) => {
  const id = req.params.id;
  Registered.findByIdAndDelete(id)
  .then(result => {
      if (result) {
        console.log('Account Deleted!');
        res.status(204).end();
      }
    })
});

app.use(pageNotFound);

app.listen(PORT, () => {
  console.log(`Server is live on port ${PORT}`);
});

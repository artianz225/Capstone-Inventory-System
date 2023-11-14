import express, { response } from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use(requestMethosLogger);

let registrationUsersData = [
  {
    id: 1,
    username: "Namo!",
    password: "admin 123"
  },
  {
    id: 2,
    username: "Namo Ka!",
    password: "use 123"
  },
  {
    id: 3,
    username: "Namo Nyo!",
    password: "admin 456"
  },
  {
    id: 4,
    username: "Namo Natin Lahat!",
    password: "user 456"
  },
];

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
  res.send('<h1>Inamo!!!</h1>')
});

app.get('/api/registrationUsersData', (req, res) => {
  res.json(registrationUsersData);
});

app.get('/api/registrationUsersData/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const users = registrationUsersData.find((users) => users.id === id)
  res.json(users);
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
  
  const users = {
    username: user.username,
    password: pass.password,
    id: generateId(),
  };

  registrationUsersData = registrationUsersData.concat(users);

  res.status(201).json(users);
});

app.delete("/api/registrationUsersData/:id", (req, res) => {
  const id = Number(req.params.id);
  registrationUsersData = registrationUsersData.filter((users) => users.id !== id);
  res.status(204).end();
});

app.use(pageNotFound);

app.listen(PORT, () => {
  console.log(`Server is live on port ${PORT}`);
});

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import registrationRouter from "./routes/resgistrationRouter.js";
import productItemsRouter from "./routes/productitemsRouter.js";
import suppliersRouter from "./routes/suppliersRouter.js";

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

app.use('/api/registrationUsersData', registrationRouter)
app.use('/api/productitemsData', productItemsRouter)
app.use('/api/suppliersData', suppliersRouter)

app.use(pageNotFound);

app.listen(PORT, () => {
  console.log(`Server is live on port ${PORT}`);
});

import express from "express";
import cors from "cors";
import registrationRouter from "./routes/resgistrationRouter.js";
import productItemsRouter from "./routes/productitemsRouter.js";
import suppliersRouter from "./routes/suppliersRouter.js";
import inOutSuppliesRouter from "./routes/inOutSuppliesRouter.js";
import purchasesAmountRouter from "./routes/purchasesAmountRouter.js";
import errorHandler from "./middlewares/errorHandler.js";
import pageNotFound from "./middlewares/pageNoteFound.js";
import connectToDB from "./utils/connectToBD.js";
import config from "./utils/config.js";
import loginRouter from "./routes/loginRouter.js";
import tokenExtractor from './middlewares/tokenExtractor.js'

const app = express();

connectToDB(config.MONGODB_URI);

function requestMethosLogger(req, res, next) {
  console.log(`Method: ${req.method}`);
  console.log(`Path: ${req.path}`);
  console.log(`Body: `, req.body);
  next();
}

app.use(cors());
app.use(express.json());
app.use(express.static('dist'));
app.use(requestMethosLogger);
app.use('/api/registrationUsersData', registrationRouter);
app.use('/api/login', loginRouter);
app.use(tokenExtractor);
app.use('/api/productItemsData', productItemsRouter);
app.use('/api/suppliersData', suppliersRouter);
app.use('/api/inOutSuppliesData', inOutSuppliesRouter);
app.use('/api/purchasesAmountData', purchasesAmountRouter)
app.use(pageNotFound);
app.use(errorHandler);

export default app;
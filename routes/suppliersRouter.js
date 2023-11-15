import express from 'express';
import Suppliers from '../models/Suppliers.js';

const suppliersRouter = express.Router();

suppliersRouter.get('/', (req, res) => {
  Suppliers.find({}).then((suppliersData) => {
    res.json(suppliersData);
  })
});

export default suppliersRouter;
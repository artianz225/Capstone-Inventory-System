import express from 'express';
import ProductItems from '../models/ProductItems.js';

const productItemsRouter = express.Router();

productItemsRouter.get('/', (req, res) => {
  ProductItems.find({}).then((productitemsData) => {
    res.json(productitemsData);
  })
});

export default productItemsRouter;
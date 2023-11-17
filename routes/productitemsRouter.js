import express from 'express';
import ProductItemController from '../controllers/productItemController.js';

const productItemsRouter = express.Router();

productItemsRouter.get('/', ProductItemController.getAllProductItems);
productItemsRouter.post('/', ProductItemController.createProductItem);
productItemsRouter.get('/:id', ProductItemController.getSingleProductItem); 
productItemsRouter.put('/:id', ProductItemController.updateProductItem);
productItemsRouter.delete('/:id', ProductItemController.deleteProductItem); 


export default productItemsRouter;
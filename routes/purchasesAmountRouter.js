import express from 'express';
import purchasesAmountController from '../controllers/purchasesAmountController.js';

const purchasesAmountRouter = express.Router();

purchasesAmountRouter.get('/', purchasesAmountController.getAllPurchasesAmount);
purchasesAmountRouter.get('/:id', purchasesAmountController.getSinglePurchasesAmount); 
purchasesAmountRouter.put('/:id', purchasesAmountController.updatePurchasesAmount);
purchasesAmountRouter.post('/', purchasesAmountController.createPurchaseAmount);


export default purchasesAmountRouter;
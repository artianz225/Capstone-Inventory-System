import express from 'express';
import purchasesAmountController from '../controllers/purchasesAmountController.js';

const purchasesAmountRouter = express.Router();

purchasesAmountRouter.get('/', purchasesAmountController.getAllPuchasesAmount);
purchasesAmountRouter.get('/:id', purchasesAmountController.getSinglePurchaseAmount); 
purchasesAmountRouter.put('/:id', purchasesAmountController.updatePurchaseAmount);


export default purchasesAmountRouter;
import express from 'express';
import inOutSuppliesController from '../controllers/inOutSuppliesController.js';

const inOutSuppliesRouter = express.Router();

inOutSuppliesRouter.get('/', inOutSuppliesController.getAllInOutSupplies);
inOutSuppliesRouter.get('/:id', inOutSuppliesController.getSingleInOutSupplies); 
inOutSuppliesRouter.put('/:id', inOutSuppliesController.updateInOutSupplies);


export default inOutSuppliesRouter;
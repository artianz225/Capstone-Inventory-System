import Suppliers from '../models/Suppliers.js'

function getAllSuppliers() {
  return Suppliers.find({}).then((result) => result);
}

function createSupplier( { supplierCode, company, contactPerson, contactNumber, email, address, status, description } ) {  
  return Suppliers.create(
    {
      supplierCode,
      company, 
      contactPerson, 
      contactNumber,
      email, 
      address, 
      status, 
      description,
    }).then((createdSupplier) => createdSupplier)
}

function deleteSupplier(id) {
  return Suppliers.findByIdAndDelete(id).then((returnedSatus) => returnedSatus);
}

export default { getAllSuppliers, createSupplier, deleteSupplier }
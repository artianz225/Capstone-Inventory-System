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

function getSingleSupplier(id) {
  return Suppliers.findById(id).then(result => result)
}

function updateSupplier(id, updatedData) {
  return Suppliers.findByIdAndUpdate(id, updatedData, { new: true })
    .then(updatedRecord => updatedRecord);
}

function deleteSupplier(id) {
  return Suppliers.findByIdAndDelete(id).then((returnedSatus) => returnedSatus);
}

export default { getAllSuppliers, createSupplier, getSingleSupplier, updateSupplier, deleteSupplier }
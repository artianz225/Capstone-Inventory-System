import InOutSupplies from '../models/InOutSupplies.js'

function getAllInOutSupplies() {
  return InOutSupplies.find({}).then((result) => result);
}

function getSingleInOutSupplies(id) {
  return InOutSupplies.findById(id).then(result => result)
}

function updateInOutSupplies(id, updatedData) {
  return InOutSupplies.findByIdAndUpdate(id, updatedData, { new: true })
    .then(updatedRecord => updatedRecord);
}

export default { getAllInOutSupplies, getSingleInOutSupplies, updateInOutSupplies }
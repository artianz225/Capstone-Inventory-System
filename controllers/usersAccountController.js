import registrationService from '../services/userService.js';
import { ref, uploadBytes} from 'firebase/storage';
import storage from '../utils/firebaseConfig.js';
import generateUniqueImageFilename from '../utils/generateUniqueImageFilename.js'

function getAllRegisteredUSers(req, res) {
  registrationService.getAllRegisteredUSers().then((result) => res.json(result));
}

async function userRegistration(req, res, next) {
  try {
    // const storageRef = ref(storage, generateUniqueImageFilename(req.file));
    // const metadata = {
    //   contentType: 'image/jpeg'
    // }

    // const snapshot = await uploadBytes(storageRef, req.file.buffer, metadata);
    // const photoUrl = `https://firebasestorage.googleapis.com/v0/b/${snapshot.ref.bucket}/o/${snapshot.ref.fullPath}?alt=media`;
    // console.log(photoUrl);
    const body = req.body;

    const createdUser = await registrationService.userRegistration({
      ...body,
        //  photoInfo: {
        //   url: photoUrl,
        //   filename: snapshot.ref.fullPath,
        //  }
    });

    res.status(201).json(createdUser);
  } catch (error) {
    next(error);
  }
}

function getRegisteredUser(req, res, next) {
  const id = (req.params.id);
  registrationService.getRegisteredUser(id)
  .then((result) => {
    if (!result) {
      return res.status(404).end();
    } 
    return res.json(result)
  })
  .catch((error) => next(error));
}

function updateUserAccount(req, res, next) {
  const id = req.params.id;
  const { username, password} = req.body
  
  const updatedUSer = {
    username,
    password
  };

  registrationService
  .updateUserAccount(id, updatedUSer)
  .then((updatedRecord) => {
    if (!updatedRecord) {
      return res.status(404).end();
    }
    return res.json(updatedRecord)
  })
  .catch((error) => next(error));
}

function deleteUserAccount(req, res, next) {
    const id = req.params.id;
    registrationService.deleteUserAccount(id).then((_status) => res.status(204).end())
    .catch((error) => next(error))
}

export default {
  getAllRegisteredUSers,
  getRegisteredUser,
  userRegistration,
  deleteUserAccount,
  updateUserAccount
};
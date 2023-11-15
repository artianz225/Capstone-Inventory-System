import mongoose from "mongoose"

if (process.argv.length < 3) {
  console.log("enter password");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://artianz225:${password}@cluster0.cls1kj2.mongodb.net/aapharmainventory?retryWrites=true&w=majority`

mongoose.set('strictQuery', false);
mongoose.connect(url);

const registerUsersSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Registered = mongoose.model('RegisteredAccounts', registerUsersSchema);

const registered = new Registered ({
  username: "For Deletion only",
  password: "delete me!",
});

registered.save().then(result => {
  console.log('registration success!');
  mongoose.connection.close();
})

Registered.find({}).then(result => {
  result.forEach(registered => {
    console.log(registered)
  })
  mongoose.connection.close();
})

Registered.findById('655438ab2ac49b5813faf9cd').then(result => {
  console.log(result);
  mongoose.connection.close();
})

Registered.findByIdAndDelete('65543c093b3fde124bed8b53').then(result => {
  console.log('Account Deleted!');
  mongoose.connection.close();
})

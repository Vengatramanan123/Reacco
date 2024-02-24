const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
// const mdl = require('../src/Components/users')

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

//Mongo Connection 
mongoose.connect('mongodb://localhost:27017/Demo', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// Fetch data of the user

app.get('/api/Explore', async (req, res) => {
  try {
    const users = await User.find({}).exec();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// app.get('/Explore/:email', function(req, res) {
//   fetchid=req.params.email;
//   User.find(({email:fetchid}),function(err,val){
//     res.send(val);
//   })
  
// });

// User Schema 
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  username:String,
  number:Number
});

const User = mongoose.model('User', userSchema);
app.use(express.json());



// Register Route
app.post('/api/main', async (req, res) => {
  const { email, password,username,number } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    email,
    password: hashedPassword,
    username,
    number,
  });

  await newUser.save();
  res.json({ message: 'Registered Successfully' });
});

// Login Route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid Credentials' });
  }

  const token = jwt.sign({ userId: user._id }, 'your-secret-key');
  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
    
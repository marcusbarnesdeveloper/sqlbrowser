const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.password}@${process.env.db}.fan4l.mongodb.net/sql?retryWrites=true&w=majority`,{useNewUrlParser: true});

const db = mongoose.connection;


const User = mongoose.model('User', {
  username: String,
  password: String,
  queries: Array,
  salt: String
});

const signup =  async ({username,password}) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    const newUser = new User({username,password:hash,salt});
    return newUser.save();
  } catch (error) {
    return error
  }
}
const getUserByName = async (username) => {
 try {
  const user = await User.findOne({username});
  return user;
 } catch (error) {
   return error;
 }
}
const getUserById = async (id, query) => {
  try {
   const user = await User.findById(id);
   user.queries.push(query);
   return user.save();
  } catch (error) {
    return error;
  }
 }
 const getUserQuery = async (id) => {
  try {
   const user = await User.findById(id);
   return user.queries;
  } catch (error) {
    return error;
  }
 }
const compare = async (password, hash) => {
  try {
    const testHash = await bcrypt.compare(password,hash);
    return testHash;
  } catch (error) {
    return error;
  }
}
module.exports = {
  signup,
  getUserByName,
  getUserById,
  getUserQuery,
  compare
};
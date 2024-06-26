const User = require('../models/User');

module.exports = {
  createForm,
};

//POST request function for user
async function createForm(req, res) {
  try {
    const user = await User.create(req.body);

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json('No Beuno:(');
  }
}

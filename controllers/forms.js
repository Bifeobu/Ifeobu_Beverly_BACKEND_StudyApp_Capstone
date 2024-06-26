const Form = require('../models/Form');

module.exports = {
  createForm,
};

//POST request function for user
async function createForm(req, res) {
  try {
    const form = await Form.create(req.body);

    res.status(200).json(form);
  } catch (err) {
    res.status(400).json('No Beuno:(');
  }
}

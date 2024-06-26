const Form = require('../models/Form');

module.exports = {
  createForm,
  getForms,
};

//POST request function for form
async function createForm(req, res) {
  try {
    const form = await Form.create(req.body);

    res.status(200).json(form);
  } catch (err) {
    res.status(400).json('No Beuno:(');
  }
}

//GET request function for form
async function getForms(req, res) {
  try {
    const forms = await Form.find({});

    res.status(200).json(forms);
  } catch (err) {
    res.status(400).send(err);
  }
}

const Form = require('../models/Form');

module.exports = {
  createForm,
  getForms,
  updateForm,
  deleteForm
};

//POST request function for form
async function createForm(req, res) {
  try {
    const makeForm = await Form.create(req.body);

    res.status(200).json(makeForm);
  } catch (err) {
    res.status(400).json('No Beuno:(');
  }
}

//GET request function for form
async function getForms(req, res) {
  try {
    const retrieveForms = await Form.find({});

    res.status(200).json(retrieveForms);
  } catch (err) {
    res.status(400).send(err);
  }
}

//Update(PATCH) request function for form by ID
async function updateForm(req, res) {
  try {
    const patchForm = await Form.findByIdAndUpdate(req.params.id, req.body, {new: true,}).exec()

    res.status(200).json(patchForm);
  } catch (err) {
    res.status(400).send(err);
  }
}

//DELETE request function for form by ID
async function deleteForm(req, res) {
  try {
    const removeForm = await Form.findByIdAndDelete(req.params.id).exec()

    res.status(200).json(removeForm);
  } catch (err) {
    res.status(400).send(err);
  }
}
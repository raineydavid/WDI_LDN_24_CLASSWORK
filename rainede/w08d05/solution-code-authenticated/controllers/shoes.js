const Shoe = require('../models/shoe');

function shoesIndex(req, res) {
  Shoe.find((err, shoes) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(shoes);
  });
}

function shoesCreate(req, res) {
  Shoe.create(req.body.shoe, (err, shoe) => {
    if (err) return res.status(400).json(err);
    return res.status(201).json(shoe);
  });
}

function shoesShow(req, res) {
  Shoe.findById(req.params.id, (err, shoe) => {
    if (err) return res.status(500).json(err);
    if (!shoe) return res.status(404).json({ message: 'Could not find a shoe with that id' });
    return res.status(200).json(shoe);
  });
}

function shoesUpdate(req, res) {
  Shoe.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }, (err, shoe) => {
    if (err) return res.status(400).json(err);
    return res.status(200).json(shoe);
  });
}

function shoesDelete(req, res) {
  Shoe.findByIdAndRemove(req.params.id, err => {
    if (err) return res.status(500).json(err);
    return res.sendStatus(204);
  });
}

module.exports = {
  index: shoesIndex,
  create: shoesCreate,
  show: shoesShow,
  update: shoesUpdate,
  delete: shoesDelete
};

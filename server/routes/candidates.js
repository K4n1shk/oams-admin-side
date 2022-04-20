const router = require("express").Router();

const Info = require('../models/info');

router.get('/', (req, res) => {
  Info.find()
    .then(infos => res.json(infos))
    .catch(err => res.status(404).json("Not able to get information!"));
})

router.get('/:id', (req, res) => {
  Info.findById(req.params.id)
    .then(infos => res.json(infos))
    .catch(err => res.status(404).json("Not able to get information!"));
})

router.put('/:id', (req, res) => {
  Info.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.delete('/:id', (req, res) => {
  Info.deleteOne({ "_id": req.params.id })
    .then(info => res.json({ msg: 'User Deleted' }))
    .catch(err => res.status(400).json({ error: "Unable to delete!" }))
})

module.exports = router;
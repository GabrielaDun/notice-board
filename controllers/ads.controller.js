const Ad = require('../models/Ad.modele');

exports.getAll = async (req, res) => {
    try {
      res.json(await Ad.find()); 
    }
    catch(err) {
      res.status(500).json({ message: err });
    }
}

exports.getById = async (req, res) => {
    try {
      const dep = await Ad.findById(req.params.id);
      if (!dep) res.status(404).json({ message: 'Not found' })
      else res.json(dep)
    }
    catch(err) {
      res.status(500).json({ message: err })
    }
}

// *************************
// I need to makse sure here that phase is passed to this function.

exports.getbySearchPhase = async (req, res) => {
    try {
      const phase = req.params.phase
      const dep = await Ad.findAll({title: {$regex: phase }});
      if (!dep) res.status(404).json({ message: 'Not found' })
      else res.json(dep)
    }
    catch(err) {
      res.status(500).json({ message: err })
    }
}

exports.postById = async (req, res) => {

    try {
      const { name } = req.body;
   
      const newAd = new Ad({ name: name });
      await newAd.save();
      res.json({ message: 'OK' });
  
    } catch(err) {
      res.status(500).json({ message: err });
    }
  
}

exports.putById = async (req, res) => {
    const { name } = req.body;
  
    try {
      const dep = await Ad.findById(req.params.id)
      if (dep) {
        await Ad.updateOne({ _id: req.params.id }, {$set: { name: name }});
        const newDep = await Ad.findById(req.params.id);
        res.json( { message: newDep })
      } 
      else res.status(404).json({ message: 'Not found...' })
    }
    catch(err) {
      res.status(500).json( { massage: err})
    }
}

exports.deleteById = async (req, res) => {

    try {
      const dep = await Ad.findById(req.params.id)
      if (dep) {
        await Ad.deleteOne( { id: req.params.id })
        res.json( { message: dep})
      }
      else res.status(404).json( { message: 'Not found...'})
      
    }
    catch(err) {
      res.status(500).json( { message: err })
    }
  
}
const Ad = require('../models/Ad.model');
const fs = require('fs');
const getImageFileType = require('../utils/getImageFileType');

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
      const { title, text, published, price, location, seller } = req.body;
      const fileType = req.file ? await getImageFileType(req.file): 'unknown' ;
    

        if  (title && typeof title === 'string' 
            && text && typeof text === 'string' 
            && req.file && ['image/png', 'image/jpeg', 'image/gif'].includes(fileType) ){

  
            const add = await Ad.create({ title, text, published, price, location, seller, photo: req.file.filename})
            res.status(201).send({ message: 'Ad created ' + add.title})

        } else {
            if(req.file) {
                try {
                fs.unlinkSync(req.file.path) // we are deleting the file after bad request
                } 
                catch (unlinkError) {
                    console.error('Error deleting file: ', unlinkError)
                }
            }
            res.status(400).send({ message: 'Bad request' })
        }
    } catch(err) {
        if (req.file) {
            try {
                fs.unlinkSync(req.file.path); // ensure to use req.file.path
            } catch (unlinkError) {
                console.error('Error deleting file:', unlinkError);
            }
        }
        res.status(500).send({message: err.message})
    }
}

exports.putById = async (req, res) => {
    const { title, text, published, photo, price, location, seller } = req.body;
    console.log(req.body);
    const fileType = req.file ? await getImageFileType(req.file): 'unknown' ;
  
    try {
      const ad = await Ad.findById(req.params.id)
      if (ad) {
        console.log(title, text, location, seller, price, published)

        if (title && text && published && price && location && seller) {
            if ( req.file && ["image/png", "image/jpeg", "image/gif"].includes(fileType) ) {
                    await Ad.updateOne({ _id: req.params.id }, {$set: { title: title, text: text, published: published, photo: req.file.filename, price: price, location: location, seller: seller }});
                    fs.unlinkSync(`public/uploads/${ad/photo}`)
                    const newAd = await Ad.findById(req.params.id);
                    res.json( { message: newAd })
                } else {
                    await Ad.updateOne( {_id: req.params.id}, {$set: { title: title, text: text, published: published, photo: photo, price: price, location: location, seller: seller }} )
                    const newAd = await Ad.findById(req.params.id);
                    res.json( { message: newAd })
                }
        } else {
            if (req.file) {
                fs.unlinkSync(req.file.path);
                res.status(400).send({ message: "Bad request"})
            } else res.status(400).send({ message: 'Bas request' })

        }
        
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
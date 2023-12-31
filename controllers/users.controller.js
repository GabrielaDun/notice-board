const User = require('../models/User.model');


exports.getRegister = async (req, res) => {
    try {
      const dep = await User.findById(req.params.id);
      if (!dep) res.status(404).json({ message: 'Not found' })
      else res.json(dep)
    }
    catch(err) {
      res.status(500).json({ message: err })
    }
}

exports.postLogin = async (req, res) => {

    try {
      const { name } = req.body;
   
      const newUser = new User({ name: name });
      await newUser.save();
      res.json({ message: 'OK' });
  
    } catch(err) {
      res.status(500).json({ message: err });
    }
  
}

exports.putUser = async (req, res) => {
    const { name } = req.body;
  
    try {
      const x = await User.findById(req.params.id)
      if (x) {
        await User.updateOne({ _id: req.params.id }, {$set: { name: name }});
        const newx = await User.findById(req.params.id);
        res.json( { message: newx })
      } 
      else res.status(404).json({ message: 'Not found...' })
    }
    catch(err) {
      res.status(500).json( { massage: err})
    }
}

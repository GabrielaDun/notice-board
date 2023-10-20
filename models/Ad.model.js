const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({ 
    title: { type: String, required: true, minLength: 10, maxLength: 50  },
    text: { type: String, required: true, minLength: 20, maxLength: 1000  },
    published: { type: String, required: true },
    photo: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    seller: { type: String, required: true, ref: 'User' },
})

module.exports = mongoose.model('Ad', adSchema)
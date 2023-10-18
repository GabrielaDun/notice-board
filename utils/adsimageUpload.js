const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/ads');
    },
    filename: (req, file, cb) => {
        const [name, ext] = file.originalname.split('.')
        cb(null, `${name}-${Date.now()}-${new Date().getHours()}-${new Date().getMinutes()}.${ext}`)
    }
})

const imageUpload = multer({ storage });

module.exports = imageUpload;
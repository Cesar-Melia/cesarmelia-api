const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;

const VALID_FILE_TYPES = ['image/png', 'image/jpg', 'image/jpeg'];

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/uploads'));
  },
});

const fileFilter = (req, file, cb) => {
  console.log('1');
  if (!VALID_FILE_TYPES.includes(file.mimetype)) {
    const error = new Error('Tipo de archivo inválido. Debe ser .jpg o .png');
    console.log('2');

    return cb(error);
  } else {
    return cb(null, true);
  }
};

const upload = multer({
  storage,
  fileFilter,
});

const uploadToCloudinary = async (req, res, next) => {
  console.log('3');
  if (req.file) {
    try {
      const filePath = req.file.path;

      console.log('4', filePath);
      const image = await cloudinary.uploader.upload(filePath); //////// Falla aquí
      console.log('5');

      await fs.unlinkSync(filePath);

      console.log('6');

      console.log(image);

      req.fileUrl = image.secure_url;

      next();
    } catch (error) {
      console.log('out');

      return next(error);
    }
  } else {
    return next();
  }
};

module.exports = { upload, uploadToCloudinary };

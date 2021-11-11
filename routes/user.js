const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
const upload = require('../middleware/upload');
router.get('/', UserController.index);
router.post('/show', UserController.show);
router.post('/store', upload.array('avatar[]'), UserController.store);
router.post('/update', UserController.update);
router.post('/delete', UserController.destroy);

// router.post('/upload', upload.single('avatar'), function (req, res, next) {
// 	console.log('file' + req.file + req.files);
// 	res.send('Successfully uploaded!');
// });

module.exports = router;

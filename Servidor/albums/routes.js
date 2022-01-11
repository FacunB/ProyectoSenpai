const express = require('express')
const router = express.Router();
const albumsController = require('./controller')

router.get('/', albumsController.getAlbum)


module.exports = router;


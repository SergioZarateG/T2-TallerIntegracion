const { Router } = require('express');
const router = Router();

const { getArtists, createArtist, getArtistById, deleteArtists } = require('../controllers/index.controller')

router.get('/artists', getArtists);
router.get('/artists/:id', getArtistById);
router.post('/artists', createArtist);
router.delete('/artists/:id', deleteArtists);

module.exports = router;
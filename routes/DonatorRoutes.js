const router = require('express').Router();
const { createDon,DonatorsDeets } = require('../Controllers/DonatorController');

router.post('/postDonator',createDon);
router.get('/donatorDetails',DonatorsDeets);

module.exports = router;
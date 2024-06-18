const router = require('express').Router();
const { AddProjects,getProjects,getSelectedProjs,deleteSelectedProject } = require('../Controllers/ProjectController');

router.post('/postProjects',AddProjects);
router.get('/getAllProjects',getProjects);
router.get('/getSelectedProjects/:_id', getSelectedProjs);
router.delete('/deleteProjects/:_id', deleteSelectedProject);

module.exports = router;
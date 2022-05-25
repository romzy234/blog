var express = require('express');
var router = express.Router();
var controller = require('../controllers/index');



/* GET home page. */
router.get('/', controller.getIndex);


router.get('/story/:id', controller.getBlogOne);
router.get('/story', controller.getPost);
router.get('/about', controller.getAbout);

router.post('/comment', controller.postComment);
router.post('/sub', controller.postSub);

router.post('/search', controller.getSearch);
router.get('/tags/:id', controller.getTags);






module.exports = router;

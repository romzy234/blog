var express = require('express');
var router = express.Router();
var controller = require('../controllers/users')
const passport = require('passport');
const upload = require("../middleware/upload");
const checkstatus = require("../middleware/checkstaus")
const isAdmin = require("../middleware/isAdmin")
const veAccess = require("../middleware/veAccess")
/* GET users listing. */
router.use(controller.totalUnseen);
router.use(controller.FinTags);
router.get('/signup',checkstatus, isAdmin, controller.getSignup);
router.post('/signup',checkstatus, isAdmin, controller.postSignup );
router.get('/signin', controller.getSignin);
router.get('/', checkstatus, controller.getIndex)

router.get('/create', checkstatus, controller.getCreate);
router.get('/posts', checkstatus, controller.getPost);
router.get('/edit', checkstatus, controller.getPost);
router.get('/myPost', checkstatus, controller.getMyPost);
router.post('/editOne/:id', upload.array('image',12), checkstatus, veAccess, controller.postEditOne);
router.get('/editOne/:id', checkstatus, veAccess, controller.getEditOne);
router.get('/delete', checkstatus, controller.getDelete);
router.get('/unpublish/:id', checkstatus, veAccess, controller.updateBlog);
router.get('/delete/:id', checkstatus, veAccess, controller.delPost);
router.get('/settings', checkstatus, controller.getSettings);
router.get('/users', checkstatus, controller.getUsers);
router.get('/comingsoon', checkstatus, controller.comingsoon);
router.get('/users/create', checkstatus, controller.getCreateUser);
router.get('/users/status/:id/:status', checkstatus, isAdmin, controller.userStatus);
router.get('/users/delete/:id', checkstatus, isAdmin, controller.delUser);
router.get('/forget-password', controller.getForgetPassword);
router.get('/change-password', checkstatus, controller.getChangePassword);
router.post('/forgot', checkstatus, controller.postMock);
router.get('/profile', checkstatus, controller.profile);

router.get('/test', checkstatus, controller.test);
router.post('/test', checkstatus, controller.postTest);

router.post('/create',upload.array('image',12), checkstatus, controller.postCreate);

router.post('/update/image',upload.array('image',12), checkstatus, controller.updateProfilePic);
router.post('/update/profile', checkstatus, controller.updateProfile);
router.post('/change-password', checkstatus, controller.postChangePassword);
router.get('/deletepost/:id', checkstatus, controller.postChangePassword);


router.post('/signin',passport.authenticate('local', { failureRedirect: '/users/signin', successRedirect: '/users/' }));
router.post('/settings', checkstatus, controller.UpdateUserSettings);
router.post('/custom', upload.array('image',12), checkstatus, controller.Updatecustom);
router.get('/custom', checkstatus, controller.custom);
router.get('/tags', checkstatus, controller.tags);
router.post('/tags', checkstatus, controller.postTags);
router.get('/tags/delete/:id', checkstatus, controller.deleteTags);


router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/users');
});

//detele later
router.post('/test2', upload.array('image',12),controller.test2);


module.exports = router;

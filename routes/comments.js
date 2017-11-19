var express = require('express');
var router = express.Router();
var passport = require('passport');
// var usersCtrl = require('../controllers/usersCtrl');
var commentsCtrl = require('../controllers/commentsCtrl');
var middleware = require("../middleware/index.js");


//COMMENT CREATE ROUTE
router.get("/new", commentsCtrl.newComment);

router.post("/", middleware.isLoggedIn, commentsCtrl.createComment);
// // COMMENT EDIT ROUTE
router.get("/:comment_id/edit", middleware.checkCommentOwnership, commentsCtrl.editComment);

// // COMMENT UPDATE
router.put("/:comment_id", middleware.checkCommentOwnership, commentsCtrl.updateComment);

// // COMMENT DESTROY ROUTE
router.delete("/:comment_id", middleware.checkCommentOwnership, commentsCtrl.deleteComment);





module.exports = router;

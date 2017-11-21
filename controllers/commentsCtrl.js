var User = require('../models/User');
var Itinerary = require('../models/Itinerary');
var Comment = require('../models/Comment');
// var Stop = require('../models/Stop');
var middleware = require("../middleware/index.js");

module.exports ={
  newComment,
  createComment,
  editComment,
  updateComment,
  deleteComment
};

  function newComment(req, res){
    User.findById(req.params.id, function(err, user){
        res.render("comments/new", {user: req.user});
    });
  }

  function createComment(req, res){
    User.findById(req.params.id, function(err, user){
        Comment.create(req.body.comment, function(err, comment){
            //add username and id to comment
            comment.author.id = req.user.id;
            comment.author.name = req.user.name;
            //save comment
            comment.save(function(err, comment) {
                user.comments.push(comment);
                user.save(function(err, user) {
                    req.flash("success", "Successfully added comment");
                    res.redirect('/user/<%=req.params.id')
                })
            }
            );
        }
     );
    }
);
}




function editComment(req, res){}

function updateComment(req, res){}

function deleteComment(req, res){}


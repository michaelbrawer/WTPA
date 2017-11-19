var User = require('../models/User');
var Itinerary = require('../models/Itinerary');
var Comment = require('../models/Comment');
var Stop = require('../models/Stop');
var middleware = require("../middleware/index.js");

module.exports ={
  newComment,
  createComment,
  editComment,
  updateComment,
  deleteComment
};

  function newComment(req, res){
    console.log(req.params.id);
    User.findById(req.params.id, function(err, user){
        if(err){
            console.log(err);
        } else {
             res.render("comments/new", {user: req.user});
        }
    });
  }

  function createComment(req, res){
   //lookup campground using ID
   var userPage = User.findById(req.params.id);
   User.findById(req.params.id, function(err, user){
    if(err){
        console.log(err);
        res.redirect("/");
    } else {
     Comment.create(req.body.comment, function(err, comment){
        if(err){
            req.flash("error", "Something went wrong");
            console.log(err);
        } else {
            //add username and id to comment
            comment.author.id = req.user._id;
            comment.author.name = req.user.name;
            //save comment
            comment.save();
            user.comments.push(comment);
            user.save();
            console.log(comment);
            req.flash("success", "Successfully added comment");
            res.redirect('/users/' + user._id);
        }
     });
    }
});
}


function editComment(req, res){
  
}

function updateComment(req, res){}

function deleteComment(req, res){}


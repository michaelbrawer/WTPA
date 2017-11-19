var User = require("../models/User");
var Comment = require("../models/Comment");

// all the middleware goes here
var middlewareObj = {};

middlewareObj.checkUserOwnership = function(req, res, next) {
    if(req.isAuthenticated()){
           User.findById(req.params.id, function(err, foundUser){
              if(err){
                  req.flash("error", "User not found");
                  res.redirect("back");
              }  else {
                  // does user own?
               if(foundUser.author.id.equals(req.user._id)) {
                   next();
               } else {
                   req.flash("error", "You don't have permission to do that");
                   res.redirect("back");
               }
              }
           });
       } else {
           req.flash("error", "You need to be logged in to do that");
           res.redirect("back");
       }
   };

middlewareObj.checkCommentOwnership = function(req, res, next) {
 if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
           if(err){
               res.redirect("back");
           }  else {
               // does user own the comment?
            if(foundComment.author.id.equals(req.user._id)) {
                next();
            } else {
                res.redirect("back");
            }
           }
        });
    } else {
        res.redirect("back");
    }
};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

module.exports = middlewareObj;
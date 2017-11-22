var User = require('../models/User');
var Stop = require('../models/Stop');
var middleware = require("../middleware/index.js");

function createComment (req, res) {
    console.log('WHY!!!')
    console.log(req.user)
    User.findById(req.params.id, function(err) {
        user.comments.push({text:req.body.text, name: req.body.name});
        user.save(function(err) {
            res.redirect(`/party/${req.user.id}`, )
        })
    })
}

function removeComment(req, res){
    console.log('hell!!!')
    console.log(req.user)
    User.findById(req.params.id, function(err) {
        user.comments.remove(req.body.comment_id);
        user.save(function (err){
        res.redirect(`/party/${req.user._id}`);
    })})}


module.exports = {
    createComment,
    removeComment
}



// function newComment(req, res){
//     User.findById(req.params.id, function(err, user){
//         res.render("comments/new", {user: req.user});
//     });
//   }

//   function createComment(req, res){
//     User.findById(req.params.id, function(err, user){
//         Comment.create(req.body.comment, function(err, comment){
//             //add username and id to comment
//             comment.author.id = req.user.id;
//             comment.author.name = req.user.name;
//             //save comment
//             comment.save(function(err, comment) {
//                 user.comments.push(comment);
//                 user.save(function(err, user) {
//                     req.flash("success", "Successfully added comment");
//                     res.redirect('/user/<%=req.params.id');
//                 });
//             }
//             );
//         }
//      );
//     }
// );
// }
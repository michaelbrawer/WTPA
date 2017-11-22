var User = require('../models/User');
var Stop = require('../models/Stop');

function createComment (req, res) {
    User.findById(req.params.id, function(err, doc) {
        doc.comments.push({text:req.body.text, name: req.user.name});
        doc.save(function(err) {
            res.redirect(`/party/${req.params.id}#comments`);
        });
    });
}

function removeComment(req, res){
    console.log('hell!!!');
    console.log(req.user);
    User.findById(req.params.id, function(err) {
        user.comments.remove(req.body.comment_id);
        user.save(function (err){
        res.redirect(`/party/${req.user._id}#comments`);
    });
});
}


module.exports = {
    createComment,
    removeComment
};
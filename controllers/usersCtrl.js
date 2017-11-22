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
    User.findById(req.params.id, function(err, doc) {
        doc.comments.remove(req.body.comment_id);
        doc.save(function (err){
        res.redirect(`/party/${req.params.id}#comments`);
    });
});
}


module.exports = {
    createComment,
    removeComment
};
var path = require('path');
var friends = require('../data/friends.js');
var friendValues = require('../data/friendScores.js');



module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendArray);
    });

    app.post('/api/friends', function(req, res) {

        friendArray.push(req.body);
        res.json(true);
    });

    app.get('/api/friends/scores', function(req, res) {
        res.send(friendValues);
    });
    app.post('/api/friends/scores', function(req, res) {

        friendValues.push(req.body);
        res.send(true);
    });


};

const model = require('../models/friends.model');

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({ error: 'Name must be specified.' });
  };

  const newFriend = {
    id: model.length,
    name: req.body.name,
  };

  model.push(newFriend);
  res.status(201).json(newFriend);
};

function listFriends(req, res) {
  res.json(model);
};

function getFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = model[friendId];

  if (!friend) {
    res.status(404).json({
      error: 'Friend not found.'
    });
  };

  res.status(200).json(friend);
};

module.exports = {
  postFriend,
  listFriends,
  getFriend,
};

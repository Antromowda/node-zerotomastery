const path = require('path');

function getMessages(req, res) {
  res.render('messages', {
    title: 'Messages to frens',
    friend: 'Elon Musk',
  });
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'cat.png'));
};

function postMessage(req, res) {
  console.log('Updating mesages...');
};

module.exports = {
  getMessages,
  postMessage,
};

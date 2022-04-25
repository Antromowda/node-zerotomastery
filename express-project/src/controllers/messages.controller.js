function getMessages(req, res) {
  res.status(200).send('<ul><li>Hello Alfred</li></ul>');
};

function postMessage(req, res) {
  console.log('Updating mesages...');
};

module.exports = {
  getMessages,
  postMessage,
};

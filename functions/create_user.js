const admin = require('firebase-admin');
//+16314964077
module.exports = function(req, res) {
  //verify the user provided a phone number
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Bad Input' });
  }

  //format the phone number to remove dashes and parens
  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  // create a new user account using the phone number
  admin.auth().createUser({ uid: phone })
  //respond to the user request, saying the account was made
    .then(user => res.send(user))
    .catch(err => res.status(422).send({ error: err }));

}
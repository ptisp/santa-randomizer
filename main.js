var emailjs = require('emailjs');

var mail = function(message, destination, subject, callback) {
  var email = emailjs.server.connect({
    user: process.env.MAIL_USER,
    password: process.env.MAIL_PASSWORD,
    host: process.env.MAIL_HOST
  });

  email.send({
    text: message,
    'reply-to': process.env.MAIL_USER,
    from: process.env.MAIL_USER,
    to: destination,
    subject: subject
  }, function(err, message) {
    if (callback) callback(err, message);
  });
};


var santas = ['xpto@gmail.com', 'blabla@yahoo.com'];

var receivers = [];
var counter = 0;

while(receivers.length < santas.length) {
  var i = Math.floor((Math.random() * santas.length));
  if(receivers.indexOf(santas[i]) < 0 && santas[i] !== santas[counter]) {
    mail('This year you are the Santa Claus of "' + santas[i] + '", treat him/them well (10€ max)! Merry xmas! ohohoh.', santas[counter], 'PTisp Santa Randomizer!');
    receivers.push(santas[i]);
    counter++;
  }
}

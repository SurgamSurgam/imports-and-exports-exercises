function reverseString(string) {
  return string.split('').reverse().join('');
}

function firstLetter(string) {
  return string[0];
}

function shout(string) {
  return string.toUpperCase();
}

module.exports.reverseString = reverseString;
module.exports.firstLetter = firstLetter;
module.exports.shout = shout;

const { charCode } = require('./string');

function toBinary(string, pad = 8) {
  const data = charCode(string).map(e => e.toString(2).padStart(pad, 0));

  return data.join(' ');
}

function toString(string) {
  return string.split(' ').map(function (char) {
    return String.fromCharCode(parseInt(char, 2));
  }).join('');
}

module.exports = {
  toBinary,
  toString,
};

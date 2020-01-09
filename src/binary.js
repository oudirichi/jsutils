const { stringToCharCodeArray } = require('./string');

function textToBinaryString(string) {
  const data = stringToCharCodeArray(string).map(e => e.toString(2).padStart(8, 0));

  return data.join(' ');
}

function binaryToText(string) {
  return string.split(' ').map(function (char) {
    return String.fromCharCode(parseInt(char, 2));
  }).join('');
}



module.exports = {
  binaryToText,
  textToBinaryString,
};

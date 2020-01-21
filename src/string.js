function stringTemplate(template, obj) {
  return template.replace(/\${(.*?)}/g, (_, key) => obj[key.trim()]);
}

function stringToCharCodeArray(string) {
  const data = [];
  for (let i = 0; i < string.length; i++) {
    data.push(string.charCodeAt(i));
  }

  return data;
}

// char code array
// function unpack(str) {
//   var bytes = [];
//   for (var i = 0; i < str.length; i++) {
//     var char = str.charCodeAt(i);
//     bytes.push(char >>> 8);
//     bytes.push(char & 0xFF);
//   }
//   return bytes;
// }

module.exports = {
  stringTemplate,
  stringToCharCodeArray,
}

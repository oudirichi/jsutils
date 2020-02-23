"use strict";

function stringTemplate(template, obj) {
  return template.replace(/\${(.*?)}/g, function (_, key) {
    return obj[key.trim()];
  });
}

function charCode(string) {
  var data = [];
  var n = string.length;

  for (var i = 0; i < n; i++) {
    data.push(string.charCodeAt(i));
  }

  return data;
}

function pack(bytes) {
  var chars = [];
  var n = bytes.length;
  var i = 0;

  while (i < n) {
    chars.push((bytes[i++] & 0xff) << 8 | bytes[i++] & 0xff);
  }

  return String.fromCharCode.apply(null, chars);
}

function unpack(str) {
  var bytes = [];
  var n = str.length;

  for (var i = 0; i < n; i++) {
    var _char = str.charCodeAt(i);

    bytes.push(_char >>> 8);
    bytes.push(_char & 0xFF);
  }

  return bytes;
}

module.exports = {
  stringTemplate: stringTemplate,
  charCode: charCode,
  unpack: unpack,
  pack: pack
};
"use strict";

function stringTemplate(template, obj) {
  return template.replace(/\${(.*?)}/g, (_, key) => obj[key.trim()]);
}

function charCode(string) {
  const data = [];
  const n = string.length;

  for (let i = 0; i < n; i++) {
    data.push(string.charCodeAt(i));
  }

  return data;
}

function pack(bytes) {
  const chars = [];
  const n = bytes.length;
  let i = 0;

  while (i < n) {
    chars.push((bytes[i++] & 0xff) << 8 | bytes[i++] & 0xff);
  }

  return String.fromCharCode.apply(null, chars);
}

function unpack(str) {
  const bytes = [];
  const n = str.length;

  for (var i = 0; i < n; i++) {
    var char = str.charCodeAt(i);
    bytes.push(char >>> 8);
    bytes.push(char & 0xFF);
  }

  return bytes;
}

module.exports = {
  stringTemplate,
  charCode,
  unpack,
  pack
};
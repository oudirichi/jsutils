"use strict";function stringTemplate(a,b){return a.replace(/\${(.*?)}/g,function(a,c){return b[c.trim()]})}function charCode(a){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a.charCodeAt(d));return b}function pack(a){for(var b=[],c=a.length,d=0;d<c;)b.push((255&a[d++])<<8|255&a[d++]);return String.fromCharCode.apply(null,b)}function unpack(a){for(var b,c=[],d=a.length,e=0;e<d;e++)b=a.charCodeAt(e),c.push(b>>>8),c.push(255&b);return c}module.exports={stringTemplate:stringTemplate,charCode:charCode,unpack:unpack,pack:pack};
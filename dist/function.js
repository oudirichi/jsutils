"use strict";function pipe(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return function(a){return b.reduce(function(a,b){return b(a)},a)}}function compose(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return function(a){return b.reduceRight(function(a,b){return b(a)},a)}}function getType(a){var b=a&&a.toString().match(/^\s*function (\w+)/);return b?b[1]:""}function isSameType(c,a){return getType(c)===getType(a)}// function memoize(fn) {
//   const cache = {};
//   return (...args) => {
//     const params = JSON.stringify(args);
//     if (!cache[params]) cache[params] = fn(...args);
//     return cache[params];
//   };
// }
module.exports={compose:compose,pipe:pipe,getType:getType,isSameType:isSameType// memoize,
};
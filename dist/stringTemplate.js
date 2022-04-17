"use strict";
function stringTemplate(template, obj) {
    return template.replace(/\${(.*?)}/g, function (_, key) { return '' + obj[key.trim()]; });
}
module.exports = stringTemplate;

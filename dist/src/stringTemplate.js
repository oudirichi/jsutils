"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringTemplate(template, obj) {
    return template.replace(/\${(.*?)}/g, (_, key) => '' + obj[key.trim()]);
}
exports.default = stringTemplate;

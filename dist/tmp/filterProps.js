"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reduce_1 = __importDefault(require("./reduce"));
function filterProps(content, properties) {
    return (0, reduce_1.default)(properties, (acc, property, propertyKey) => {
        let data = content[propertyKey] || property.default;
        if (Array.isArray(property.values)) {
            data = property.values.includes(data) ? data : property.default;
        }
        if (data) {
            if (typeof property.format === 'function') {
                data = property.format(data);
            }
            acc[propertyKey] = data;
        }
        return acc;
    }, {});
}
exports.default = filterProps;

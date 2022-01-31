"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function event() {
    const subscribed = {};
    const on = (event, fn) => {
        subscribed[event] = subscribed[event] || [];
        return (subscribed[event].push(fn) - 1);
    };
    const remove = (event, index) => {
        if (!(event in subscribed))
            return;
        subscribed[event].splice(index, 1);
    };
    const clear = (event) => {
        if (event) {
            subscribed[event] = [];
        }
        else {
            Object.keys(subscribed).forEach((k) => {
                delete subscribed[k];
            });
        }
    };
    const emit = (event, ...args) => {
        if (!(event in subscribed))
            return false;
        subscribed[event].forEach((fn) => {
            fn(...args);
        });
        return true;
    };
    return {
        on,
        emit,
        remove,
        clear,
    };
}
exports.default = event;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Eventable {
    subscribed = {};
    on(event, fn) {
        this.subscribed[event] = this.subscribed[event] || [];
        return (this.subscribed[event].push(fn) - 1);
    }
    remove(event, index) {
        if (!(event in this.subscribed))
            return;
        this.subscribed[event].splice(index, 1);
    }
    clear(event) {
        if (event) {
            this.subscribed[event] = [];
        }
        else {
            Object.keys(this.subscribed).forEach((k) => {
                delete this.subscribed[k];
            });
        }
    }
    emit(event, ...args) {
        if (!(event in this.subscribed))
            return false;
        this.subscribed[event].forEach((fn) => {
            fn(...args);
        });
        return true;
    }
}
exports.default = Eventable;

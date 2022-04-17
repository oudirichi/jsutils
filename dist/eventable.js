"use strict";
var Eventable = (function () {
    function Eventable() {
        this.subscribed = {};
    }
    Eventable.prototype.on = function (event, fn) {
        this.subscribed[event] = this.subscribed[event] || [];
        return (this.subscribed[event].push(fn) - 1);
    };
    Eventable.prototype.remove = function (event, index) {
        if (!(event in this.subscribed))
            return;
        this.subscribed[event].splice(index, 1);
    };
    Eventable.prototype.clear = function (event) {
        var _this = this;
        if (event) {
            this.subscribed[event] = [];
        }
        else {
            Object.keys(this.subscribed).forEach(function (k) {
                delete _this.subscribed[k];
            });
        }
    };
    Eventable.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!(event in this.subscribed))
            return false;
        this.subscribed[event].forEach(function (fn) {
            fn.apply(void 0, args);
        });
        return true;
    };
    return Eventable;
}());
module.exports = Eventable;

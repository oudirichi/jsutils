"use strict";

module.exports = function () {
  const subscribed = {};

  this.on = (event, fn) => {
    subscribed[event] = subscribed[event] || [];
    return subscribed[event].push(fn) - 1;
  };

  this.emit = (event, ...args) => {
    subscribed[event].forEach(callback => {
      callback(...args);
    });
  };

  this.subscribed = subscribed;
};
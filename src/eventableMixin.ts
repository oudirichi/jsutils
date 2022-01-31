import event from "./event";

const mixin = (superclass) => class extends superclass {
  constructor(...args) {
    super(...args);

    const innerEvent = event();
    Object.entries(innerEvent).forEach(([k,fn]) => {
      this[k] = fn;
    });
  }
}

export default mixin;

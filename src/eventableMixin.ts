import event from "./event";

const eventableMixin = (superclass) => class extends superclass {
  constructor(...args) {
    super(...args);

    const innerEvent = event();
    Object.entries(innerEvent).forEach(([k,fn]) => {
      this[k] = fn;
    });
  }
}

export default eventableMixin;

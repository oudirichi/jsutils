import event from "./event";

class Eventable {
  constructor() {
    const innerEvent = event();
    Object.entries(innerEvent).forEach(([k,fn]) => {
      this[k] = fn;
    });
  }
}

export default Eventable;

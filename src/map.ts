import isObject from "./isObject";

function map(object, fn) {
  if (isObject(object)) {
    return Object.entries(object).map(([k, v]) => fn(v, k));
  } else {
    return object.map((v, k) => fn(v, k));
  }
}


export default map;

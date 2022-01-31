interface Callable {
  (...args: any[]): any;
}

function pipe(...functions: Array<Callable>) {
  return (args) => functions.reduce(async (arg, fn) => {
    return fn(await arg);
  }, args);
}


export default pipe;

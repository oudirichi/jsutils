function pipe(...functions) {
  return (args) => functions.reduce(async (arg, fn) => {
    return fn(await arg);
  }, args);
}


export = pipe;

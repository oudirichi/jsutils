function flatten(...args: any[]): any[] {
  return args.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc.concat(flatten(...item));
    } else {
      acc.push(item);
    }

    return acc;
  }, []);
}

export default flatten;

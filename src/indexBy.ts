function indexBy<T>(collection: Array<T>, key: string | number | symbol): { [key: string | number | symbol] : T } {
  return collection.reduce((acc, object) => {
    acc[object[key]] = object;

    return acc;
  }, {});
}

export default indexBy;

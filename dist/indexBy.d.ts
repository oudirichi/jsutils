declare function indexBy<T>(collection: Array<T>, key: string | number | symbol): {
    [key: string | number | symbol]: T;
};
export default indexBy;

declare const eventableMixin: (superclass: any) => {
    new (...args: any[]): {
        [x: string]: any;
    };
    [x: string]: any;
};
export default eventableMixin;

interface Callable {
    (...args: any[]): any;
}
declare function pipe(...functions: Array<Callable>): (args: any) => any;
export default pipe;

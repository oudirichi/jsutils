interface Reject {
    (reason?: unknown): void;
}
interface Resolve<T> {
    (resolve: T): void;
}
interface Deferred<T> {
    reject: Reject;
    resolve: Resolve<T>;
    promise: Promise<T>;
}
declare function defer<T>(): Deferred<T>;
export default defer;

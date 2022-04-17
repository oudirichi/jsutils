interface Reject<T> {
    (reason: T): void;
}
interface Resolve<T> {
    (resolve: T): void;
}
interface Deferred<T, E> {
    reject: Reject<E>;
    resolve: Resolve<T>;
    promise: Promise<T>;
}
declare function defer<T = unknown, E = unknown>(): Deferred<T, E>;
export = defer;

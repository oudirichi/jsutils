interface Reject<T> {
  (reason: T): void
}

interface Resolve<T> {
  (resolve: T): void
}

interface Deferred<T, E> {
  reject: Reject<E>,
  resolve: Resolve<T>,
  promise: Promise<T>
}

function defer<T = unknown, E = unknown>(): Deferred<T,E> {
  let promiseResolve;
  let promiseReject;

  const promise = new Promise<T>((resolve, reject) => {
    promiseResolve = resolve;
    promiseReject = reject;
  });

  const deferred: Deferred<T, E> = {
    promise,
    reject: promiseReject,
    resolve: promiseResolve,
  };

  return deferred;
}

export = defer;

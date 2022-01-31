interface Reject {
  (reason?: unknown): void
}

interface Resolve<T> {
  (resolve: T): void
}

interface Deferred<T> {
  reject: Reject,
  resolve: Resolve<T>,
  promise: Promise<T>
}

function defer<T>(): Deferred<T> {
  let promiseResolve;
  let promiseReject;

  const promise = new Promise<T>((resolve, reject) => {
    promiseResolve = resolve;
    promiseReject = reject;
  });

  const deferred: Deferred<T> = {
    promise,
    reject: promiseReject,
    resolve: promiseResolve,
  };

  return deferred;
}

export default defer;

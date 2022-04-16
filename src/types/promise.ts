export interface Reject {
  (reason?: unknown): void
}

export interface Resolve<T> {
  (resolve: T): void
}


export interface Deferred<T> {
  reject: Reject,
  resolve: Resolve<T>,
  promise: Promise<T>
}

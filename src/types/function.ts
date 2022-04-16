export interface Callable {
  (...args: any[]): void;
}

export interface Action<T, V> {
  (item: T, key: V): void;
}

export interface Predicate<T, V> {
  (item: T, key: V): boolean;
}

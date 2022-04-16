import { RecordKey } from './types/object';
declare function reduce<T>(object: Record<RecordKey, T> | Array<T>, fn: (acc: unknown, value: T, key: RecordKey) => unknown, startAcc?: unknown): unknown;
export default reduce;

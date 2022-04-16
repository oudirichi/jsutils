import { RecordKey } from './types/object';
declare function safeAdd<T>(obj: Record<RecordKey, T>, key: RecordKey, item: T): T;
export default safeAdd;

import { RecordKey } from './types/object';
interface indexByCallback<T> {
    (item: T): Array<RecordKey> | RecordKey;
}
declare function indexBy<T>(col: Array<T>, ...args: Array<indexByCallback<T> | RecordKey>): Record<RecordKey, unknown>;
export default indexBy;

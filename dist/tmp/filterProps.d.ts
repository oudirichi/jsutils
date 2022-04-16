import { RecordKey } from './types/object';
import { Prop } from './types/prop';
declare function filterProps(content: any, properties: Record<RecordKey, Prop>): unknown;
export default filterProps;

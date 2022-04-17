import {
  RecordKey,
} from './types/object'

function safeAdd<T>(obj: Record<RecordKey, T>, key: RecordKey, item: T): T  {
    if (!(key in obj)) obj[key] = item;
    return obj[key];
  }

  export = safeAdd;

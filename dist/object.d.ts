declare function nullToUndefined(obj: any): any;
declare function clean(objectToClean?: {}, { recursive }?: {
    recursive: boolean;
}): {};
declare function reject(raw: any, rejected: any): {};
declare function isEmpty(obj: any): boolean;
declare function any(obj: any): boolean;
declare function only(raw: any, allowed: any): {};
declare function present(obj: any, keys: any): any;
declare function every(obj: any, callback: any): boolean;
declare const _default: {
    any: typeof any;
    clean: typeof clean;
    every: typeof every;
    isEmpty: typeof isEmpty;
    nullToUndefined: typeof nullToUndefined;
    only: typeof only;
    present: typeof present;
    reject: typeof reject;
};
export = _default;

export function any(obj: any): boolean;
export function clean(objectToClean?: {}, { recursive }?: {
    recursive: any;
}): {};
export function every(obj: any, callback: any): boolean;
export function isEmpty(obj: any): boolean;
export function nullToUndefined(obj: any): any;
export function only(raw: any, allowed: any): {};
export function present(obj: any, keys: any): any;
export function reject(raw: any, rejected: any): {};

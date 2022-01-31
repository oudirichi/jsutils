import * as Arr from './array';
import * as DateUtils from './date';
import * as FunctionUtils from './function';
import * as PromiseUtils from './promise';
import event from './event';
import Eventable from './eventable';
import ObjectUtils from './object';
declare const _default: {
    defer: typeof PromiseUtils.defer;
    isPromise: typeof PromiseUtils.isPromise;
    any: typeof ObjectUtils.any;
    clean: typeof ObjectUtils.clean;
    every: typeof ObjectUtils.every;
    isEmpty: typeof ObjectUtils.isEmpty;
    isObject: typeof ObjectUtils.isObject;
    map: typeof ObjectUtils.map;
    nullToUndefined: typeof ObjectUtils.nullToUndefined;
    only: typeof ObjectUtils.only;
    present: typeof ObjectUtils.present;
    reject: typeof ObjectUtils.reject;
    no: typeof FunctionUtils.no;
    yes: typeof FunctionUtils.yes;
    noop: typeof FunctionUtils.noop;
    pipe: typeof FunctionUtils.pipe;
    dd: typeof FunctionUtils.dd;
    sleep: typeof FunctionUtils.sleep;
    stringTemplate: typeof FunctionUtils.stringTemplate;
    Eventable: typeof Eventable;
    event: typeof event;
    eventableMixin: (superclass: any) => {
        new (...args: any[]): {
            [x: string]: any;
        };
        [x: string]: any;
    };
    daysInMonth: typeof DateUtils.daysInMonth;
    timestamp: typeof DateUtils.timestamp;
    default: {
        indexBy: typeof import("./indexBy").default;
    };
    union: typeof Arr.concat;
    intersection: typeof Arr.intersection;
    concat: typeof Arr.concat;
    difference: typeof Arr.difference;
    uniq: typeof Arr.uniq;
    flatten: typeof Arr.flatten;
};
export default _default;

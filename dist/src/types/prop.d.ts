declare type PropConstructor<T = any> = {
    new (...args: any[]): T & Record<string, unknown>;
} | {
    (): T;
};
export interface Prop<T = any, D = T> {
    type?: PropConstructor<T>;
    required?: boolean;
    default?: D;
    values?: Array<any>;
    format?: (value: unknown) => unknown;
}
export {};

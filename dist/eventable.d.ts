import { Callable } from './types/function';
declare class Eventable {
    private subscribed;
    on(event: string, fn: Callable): number;
    remove(event: string, index: number): void;
    clear(event: string | undefined): void;
    emit(event: string, ...args: any[]): boolean;
}
export = Eventable;

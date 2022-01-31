interface Callable {
    (...args: any[]): void;
}
export default function event(): {
    on: (event: string, fn: Callable) => number;
    emit: (event: string, ...args: any[]) => boolean;
    remove: (event: string, index: number) => void;
    clear: (event: string | undefined) => void;
};
export {};

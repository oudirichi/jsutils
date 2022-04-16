import {
  Callable,
} from './types/function'

class Eventable {
  private subscribed: Record<string, Array<Callable>> = {};

  on(event: string, fn: Callable): number {
    this.subscribed[event] = this.subscribed[event] || [];
    return (this.subscribed[event].push(fn) - 1);
  }

  remove(event: string, index: number): void {
    if (!(event in this.subscribed)) return;
    this.subscribed[event].splice(index, 1);
  }

  clear(event: string | undefined): void {
    if (event) {
      this.subscribed[event] = [];
    } else {
      Object.keys(this.subscribed).forEach((k) => {
        delete this.subscribed[k];
      });
    }
  }

  emit (event: string, ...args: any[]): boolean {
    if (!(event in this.subscribed)) return false;

    this.subscribed[event].forEach((fn) => {
      fn(...args);
    });

    return true;
  }
}

export default Eventable;

interface Callable {
  (...args: any[]): void;
}

export default function event() {
  const subscribed: Record<string, Array<Callable>> = {};

  const on = (event: string, fn: Callable): number => {
    subscribed[event] = subscribed[event] || [];
    return (subscribed[event].push(fn) - 1);
  }

  const remove = (event: string, index: number): void => {
    if(!(event in subscribed)) return;
    subscribed[event].splice(index, 1);
  }

  const clear = (event: string|undefined): void => {
    if (event) {
      subscribed[event] = [];
    } else {
      Object.keys(subscribed).forEach((k) => {
        delete subscribed[k];
      });
    }
  }

  const emit = (event: string, ...args: any[]): boolean => {
    if (!(event in subscribed)) return false;

    subscribed[event].forEach((fn) => {
      fn(...args);
    });

    return true;
  };

  return {
    on,
    emit,
    remove,
    clear,
  }
}

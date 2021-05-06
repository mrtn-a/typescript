// type allias
type Callback = () => void;

export class Eventing {
  // object event of strings
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    // if handler is undefined or there's no handlers
    if (!handlers || handlers.length === 0) {
      return;
    }
    // if there are handlers
    handlers.forEach((callback) => {
      callback();
    });
  };
}

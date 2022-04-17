import Eventable from './eventable';

export = function event(): Eventable {
  return new Eventable();
}

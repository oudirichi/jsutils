import Eventable from './eventable';

export default function event(): Eventable {
  return new Eventable();
}

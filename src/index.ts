import * as Arr from './array';
import * as Col from './collection';
import * as DateUtils from './date';
import * as FunctionUtils from './function';
import * as PromiseUtils from './promise';
import event from './event';
import eventableMixin from './eventableMixin';
import Eventable from './eventable';
import ObjectUtils from './object';

export default {
  ...Arr,
  ...Col,
  ...DateUtils,
  Eventable,
  event,
  eventableMixin,
  ...FunctionUtils,
  ...ObjectUtils,
  ...PromiseUtils,
}

import customCallbackHandler from './../shared/customCallbackHandler.js';
import onImageRendered from './onImageRendered.js';
import tap from './tap.js';
import touchStart from './touchStart.js';
import touchStartActive from './touchStartActive.js';

const doubleTap = customCallbackHandler.bind(
  null,
  'touch',
  'doubleTapCallback'
);
// TODO: some touchDrag tools don't want to fire on touchStart
// TODO: Drag tools have an option `fireOnTouchStart` used to filter
// TODO: Them out of TOUCH_START handler
const touchDrag = customCallbackHandler.bind(
  null,
  'touch',
  'touchDragCallback'
);
const touchEnd = customCallbackHandler.bind(null, 'touch', 'touchEndCallback');
const touchPinch = customCallbackHandler.bind(
  null,
  'touch',
  'touchPinchCallback'
);
const touchPress = customCallbackHandler.bind(
  null,
  'touch',
  'touchPressCallback'
);

export {
  doubleTap,
  onImageRendered,
  tap,
  touchDrag,
  touchEnd,
  touchPinch,
  touchPress,
  touchStart,
  touchStartActive
};

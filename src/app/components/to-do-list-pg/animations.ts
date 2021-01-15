import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

// Fadeing in title when brower starts
export const fadeIn = trigger('fadeIn', [
  state(
    'void',
    style({
      opacity: 0,
      transform: 'translateY(-20px)',
    })
  ),
  transition('void => *', [animate(1000)]),
]);

// Slide in in when new task is added
export const slideIn = trigger('slideIn', [
  state(
    'void',
    style({
      opacity: 0,
      transform: 'translateX(-20px)',
    })
  ),

  transition('void => *', [animate(999)]),
  transition('* => void', [animate(200)]),
]);

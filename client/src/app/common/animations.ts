import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

const pages = [
  'Users',
  'UserUpsert',
  'User',
  'Posts',
  'PostUpsert',
  'Post',
  'Dashboard',
  'Address',
  'Table',
  'Tree',
  'DragDrop',
];
function getTransition(p: string) {
  return transition('*<=>' + p, [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('250ms ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('250ms ease-out', style({ left: '0%' }))]),
    ]),
    query(':enter', animateChild()),
  ]);
}

export const slideInAnimation = trigger(
  'routeAnimations',
  pages.map((p) => getTransition(p))
);

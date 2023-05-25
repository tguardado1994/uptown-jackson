import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  transition,
  group,
  animate,
} from '@angular/animations';

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [CommonModule, BrowserAnimationsModule],
})
export class AnimationsModule {
  static fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    state('*', style({ opacity: 1 })),
    transition('void => *', animate('300ms ease-in-out')),
  ]);

  static fadeInOut = trigger('fadeInOut', [
    state('void', style({ opacity: 0 })),
    state('*', style({ opacity: 1 })),
    transition('void => *', animate('300ms ease-in-out')),
    transition('* => void', animate('300ms ease-in-out')),
  ]);

  static modalFade = trigger('modalFade', [
    state('void', style({ opacity: 0 })),
    state('*', style({ opacity: 1 })),
    transition('void => *', animate('100ms ease-in-out')),
    transition('* => void', animate('100ms ease-in-out')),
  ]);
}

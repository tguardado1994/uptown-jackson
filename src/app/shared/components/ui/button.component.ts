import {
  Component,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
} from '@angular/core';
import { AnimationsModule } from '../../modules/animations.module';

@Component({
  selector: 'app-button',
  template: `
    <button
      (click)="this.onClick.emit()"
      [disabled]="isLoading"
      [type]="buttonType"
      class="text-white bg-green-600 hover:bg-green-800 transition duration-300 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium text-sm text-center dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-400"
      [ngClass]="styles"
      [ngSwitch]="isLoading"
    >
      <ng-container *ngSwitchDefault>
        <div [@fade] class="flex justify-center items-center">
          <p class="text-sm">{{ buttonText }}</p>
          <div *ngIf="icon" [ngClass]="iconStyles">
            <ng-container [ngTemplateOutlet]="icon"></ng-container>
          </div>
        </div>
      </ng-container>
      <app-loading-icon
        [@fade]
        *ngSwitchCase="true"
        styles="h-5 w-5"
      ></app-loading-icon>
    </button>
  `,
  animations: [AnimationsModule.fade],
})
export class ButtonComponent {
  @Input() isLoading: boolean = false;
  @Input() buttonText: string = '';
  @Input() buttonType: 'button' | 'submit' = 'button';
  @Input() icon: TemplateRef<SVGElement> | null = null;
  @Input() iconStyles: string = '';
  @Input() styles: string = '';

  @Output() onClick = new EventEmitter<void>();
}

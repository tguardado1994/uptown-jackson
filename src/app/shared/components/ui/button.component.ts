import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      [disabled]="isLoading"
      [type]="buttonType"
      class="btn bg-green"
      [ngClass]="styles"
      [ngSwitch]="isLoading"
    >
      <ng-container *ngSwitchDefault>
        <div class="d-flex justify-content-center align-items-center">
          <p class="mb-0 text-white">{{ buttonText }}</p>
          <div *ngIf="icon" [ngClass]="iconStyles">
            <ng-container [ngTemplateOutlet]="icon"></ng-container>
          </div>
        </div>
      </ng-container>
      <div class="spinner-border spinner-border-sm mx-3" role="status" *ngSwitchCase="true">
        <span class="visually-hidden">Loading...</span>
      </div>
    </button>
  `,
})
export class ButtonComponent {
  @Input() buttonText: string = '';
  @Input() buttonType: string = 'button';
  @Input() isLoading: boolean = false;
  @Input() styles: string = 'false';
  @Input() icon: TemplateRef<SVGElement> | null = null;
  @Input() iconStyles: string = '';
}

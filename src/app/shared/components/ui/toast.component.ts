import { Component, Input, OnInit } from '@angular/core';
import { AnimationsModule } from '../../modules/animations.module';

@Component({
  selector: 'app-toast',
  template: `
    <div
      *ngIf="showToast"
      [@fadeInOut]
      class="px-3 py-4 rounded-lg shadow-lg transition ease-in-out duration-500 z-50"
      [ngClass]="{
        'bg-green-600': type === 'success',
        'bg-red-600': type === 'error'
      }"
    >
      <div class="flex justify-between">
        <div class="text-white text-base font-medium">
          {{ toastMessage }}
        </div>
        <button
          type="button"
          class="text-white text-lg font-semibold focus:outline-none rounded-lg hover:ring-2 hover:ring-white hover:ring-opacity-50 ml-2 transition-all ease-in-out duration-200"
          (click)="this.showToast = false"
        >
          <app-close-icon></app-close-icon>
        </button>
      </div>
    </div>
  `,
  animations: [AnimationsModule.fadeInOut],
})
export class ToastComponent implements OnInit {
  @Input() toastMessage: string = '';
  @Input() type: 'success' | 'error' | null = null;
  public showToast: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.showToast = false;
    }, 4000);
  }
}

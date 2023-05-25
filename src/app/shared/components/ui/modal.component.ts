import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnimationsModule } from '../../modules/animations.module';

@Component({
  selector: 'app-modal',
  template: `
    <section
      *ngIf="showModal"
      [@modalFade]
      class="fixed top-0 right-0 left-0 bottom-0 w-screen h-screen flex justify-center items-center z-50 backdrop-blur-lg backdrop-brightness-50"
    >
      <div
        class="p-4 rounded-lg shadow-lg bg-gray-100 flex flex-col  max-w-2xl w-full"
      >
        <app-button
          styles="p-2 rounded-full float-right"
          [icon]="closeIcon"
          (onClick)="close()"
        ></app-button>

        <ng-template #closeIcon><app-close-icon></app-close-icon></ng-template>
        <div>
          <ng-content></ng-content>
        </div>
      </div>
    </section>
  `,
  animations: [AnimationsModule.modalFade],
})
export class ModalComponent {
  @Input() showModal: boolean = false;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  close() {
    this.closeModal.emit();
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  template: `
    <div
      class="toast"
      [ngClass]="{
        show: showToast,
        'bg-success': type === 'success',
        'bg-danger': type === 'error'
      }"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-body d-flex justify-content-between">
        <div class="text-white">
          {{ toastMessage }}
        </div>
        <button
          type="button"
          class="btn-close btn-close-white"
          data-bs-dismiss="toast"
          aria-label="Close"
          (click)="closeToast()"
        ></button>
      </div>
    </div>
  `,
  styles: [
    `
      .toast {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }
      .toast.show {
        opacity: 1;
      }
      .toast-body {
        padding: 1rem;
        font-size: 1.25rem; /* Adjust this as per your requirement */
      }
      .btn-close-white::after, .btn-close-white::before {
        background-color: white;
      }
    `,
  ],
})
export class ToastComponent implements OnInit {
  @Input() toastMessage: string = '';
  @Input() type: 'success' | 'error' | null = null;
  public showToast: boolean = true;

  closeToast() {
    this.showToast = false;
  }

  ngOnInit() {
    setTimeout(() => {
      this.closeToast();
    }, 2000);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-icon',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-6 w-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        transition: transform 0.3s ease;
      }
    `,
  ],
})
export class ArrowIconComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

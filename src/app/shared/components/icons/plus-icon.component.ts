import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plus-icon',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  `,
  styles: [],
})
export class PlusIconComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
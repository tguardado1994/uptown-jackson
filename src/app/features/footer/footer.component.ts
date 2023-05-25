import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-green-800 text-white py-10 sm:px-16 px-6 mt-auto">
      <div class="container mx-auto text-center">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 routerLink="/about" class="text-xl mb-4 font-semibold underline">About Us</h3>

            <ul class="space-y-2 text-sm">
              <li><a class="hover:text-gray-300">Company</a></li>
              <li><a class="hover:text-gray-300">Team</a></li>
              <li><a class="hover:text-gray-300">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl mb-4 font-semibold underline">Support</h3>
            <ul class="space-y-2 text-sm">
              <li><a class="hover:text-gray-300">Help Center</a></li>
              <li><a class="hover:text-gray-300">Safety Center</a></li>
              <li>
                <a class="hover:text-gray-300">Community Guidelines</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl mb-4 font-semibold underline">Community</h3>
            <ul class="space-y-2 text-sm">
              <li><a class="hover:text-gray-300">Forums</a></li>
              <li><a class="hover:text-gray-300">Creatives</a></li>
              <li><a class="hover:text-gray-300">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl mb-4 font-semibold underline">Contact Us</h3>
            <ul class="space-y-2 text-sm">
              <li><a class="hover:text-gray-300">Twitter</a></li>
              <li><a class="hover:text-gray-300">Facebook</a></li>
              <li><a class="hover:text-gray-300">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div class="text-center text-sm mt-8">
          <p>&copy; 2023 Uptown Jackson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

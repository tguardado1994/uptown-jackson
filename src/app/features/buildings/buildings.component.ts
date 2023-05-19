import { Component } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { BuildingService } from 'src/app/shared/services/building.service';
import { UserService } from 'src/app/shared/services/user.service';



@Component({
  selector: 'app-buildings',
  template: `
    <div class="container mx-auto px-4 mt-8">
      <div
        class="md:flex md:justify-start my-3"
        *ngIf="userService.user | async"
      >
        <app-button
          routerLink="create"
          buttonText="Add Your Own Building"
          styles="px-5 py-2.5 rounded-lg w-full mt-4"
        ></app-button>
      </div>
      <div class="flex flex-wrap -mx-4">
        <div
          class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-4"
          *ngFor="let building of buildings$ | async"
        >
          <div
            class="shadow-lg cursor-pointer rounded-md overflow-hidden hover:shadow-xl transition-all ease-in-out duration-300 hover:scale-105"
            [routerLink]="['detail/' + building.id]"
          >
            <img
              class="w-full h-64 object-cover"
              [src]="building.image_url"
              alt="Building image"
            />
            <div class="px-6 py-4">
              <h5 class="font-bold text-xl mb-2">
                {{ building.building_address }}
              </h5>
              <p class="text-gray-700 text-base">
                Contact: {{ building.building_contact_name }}
              </p>
              <p class="text-gray-700 text-base">
                Email: {{ building.building_contact_email }}
              </p>
              <p class="text-gray-700 text-base">
                Square Footage: {{ building.square_footage }}
              </p>
            </div>
          </div>
        </div>
      </div>

<!-- Pagination -->

<nav aria-label="Page navigation example">
  <ul class="inline-flex -space-x-px">
    <li >
      <a href="#" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    <li >
      <a href="#" class="px-3 py-2 text-white border border-gray-300 bg-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700">1</a>
    </li>
    <li *ngIf="currentPage > 1">
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li *ngIf="currentPage > 2 ">
      <a href="#" aria-current="page" class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li *ngIf="currentPage < totalPages">
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li *ngIf="currentPage < totalPages - 1">
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" (click)="nextPage()">Next</a>
    </li>
  </ul>
</nav>


  `,
})
export class BuildingsComponent {

  public currentPage = 1;
  public totalPages = 0;

  public buildings$ = this.buildingsService.getBuildings().pipe(
    tap((data) => console.log(data)),
    map((data: any) => data.data.buildings)
  )

  constructor(
    private buildingsService: BuildingService,
    public userService: UserService
  ) {}

  public nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
}


}

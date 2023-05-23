import { Component, OnInit } from '@angular/core';
import { Observable, map, switchMap, tap } from 'rxjs';
import { BuildingService } from 'src/app/shared/services/building.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Building } from 'src/app/shared/interfaces/building';

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

<nav aria-label="Page navigation example" class="flex justify-center">
  <ul class="inline-flex">
    <li>
      <a
        class="px-3 py-2 ml-0 leading-tight text-white bg-green-300 border border-green-500 rounded-l-lg hover:bg-green-400 hover:text-white-800 dark:bg-green-800 dark:border-green-700 dark:text-white-400 dark:hover:bg-green-700 dark:hover:text-gray-100 cursor-pointer"
        (click)="previousPage()"
      >Previous</a>
    </li>
    <li>
      <a *ngIf="currentPage <= totalPages"
        class="px-3 py-2 text-white border border-green-300 bg-green-600 hover:bg-green-500 hover:text-white-700 dark:border-green-700 dark:bg-green-700 cursor-pointer"
      >{{ currentPage }}</a>
    </li>

    <li>
      <a *ngIf="currentPage < totalPages"
        class="px-3 py-2 leading-tight text-white bg-green-300 border border-green-300 rounded-r-lg hover:bg-green-400 hover:text-white-800 dark:bg-green-800 dark:border-green-700 dark:text-white dark:hover:bg-green-700 dark:hover:text-white cursor-pointer"
        (click)="nextPage()"
      >Next</a>
    </li>
  </ul>
</nav>
  `,
})
export class BuildingsComponent implements OnInit{
  public currentPage = 1;
  public totalPages = 0;
  public buildings$: Observable<Building[]> | undefined;

  constructor(
    private buildingsService: BuildingService,
    private route: ActivatedRoute,
    public userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildings$ = this.route.queryParams.pipe(
      tap(params => {
        if (params['page']) {
          this.currentPage = Number(params['page']);
        }
      }),
      switchMap(params => this.buildingsService.getBuildings(params['page'] || 1)),
      tap((data: any) => {
        console.log('hello', data.data.pagination.total_pages);
        this.totalPages = data.data.pagination.total_pages; // assuming your service returns a totalPages property
      }),
      map((data: any) => data.data.buildings)
    );
  }

  public nextPage(): void {

    if (this.currentPage < this.totalPages) {
      this.router.navigate([`/buildings`], {queryParams: {page: this.currentPage + 1}})
    }
  }

  public previousPage(): void {
    if (this.currentPage > 1) {
      this.router.navigate(['/buildings'], { queryParams: { page: this.currentPage - 1 } });
    }
  }

}

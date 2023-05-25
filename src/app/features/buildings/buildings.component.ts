import { Component, OnInit } from '@angular/core';
import {
  Observable,
  delay,
  map,
  of,
  race,
  shareReplay,
  startWith,
  switchMap,
  take,
} from 'rxjs';
import { BuildingService } from 'src/app/shared/services/building.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Building } from 'src/app/shared/interfaces/building';
import { AnimationsModule } from 'src/app/shared/modules/animations.module';

@Component({
  selector: 'app-buildings',
  template: `
    <div class="container mx-auto px-2 mt-8">
      <div class="flex flex-wrap -mx-4">
        <ng-container *ngIf="!(isLoading$ | async); else loadingBlock">
          <div
            [@fade]
            class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4 px-2"
            *ngFor="let building of buildings$ | async as buildings"
          >
            <app-building-card [building]="building"></app-building-card>
          </div>
        </ng-container>

        <ng-template #loadingBlock>
          <div
            class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4"
            *ngFor="let i of [].constructor(10)"
            [@fade]
          >
            <div
              class="animate-pulse shadow-lg cursor-pointer rounded-md overflow-hidden w-full"
            >
              <div
                class="flex items-center justify-center h-64 bg-gray-300 rounded-t dark:bg-gray-700"
              >
                <app-placeholder-icon></app-placeholder-icon>
              </div>
              <div class="px-6 py-4">
                <div
                  class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"
                ></div>
                <div
                  class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"
                ></div>
                <div
                  class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"
                ></div>
                <div
                  class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"
                ></div>
              </div>
            </div>
          </div>
        </ng-template>
      </div>

      <!-- Pagination -->
      <div class="mt-6 flex justify-center">
        <button
          class="border border-gray-500 hover:border-gray-700 rounded-md text-gray-500 hover:text-gray-700 px-4 py-2 mx-2"
          (click)="previousPage()"
          [disabled]="(currentPage$ | async) === 1"
        >
          Previous
        </button>
        <div class="flex items-center px-4 py-2">
          Page {{ currentPage$ | async }} of {{ totalPages$ | async }}
        </div>
        <button
          class="border border-gray-500 hover:border-gray-700 rounded-md text-gray-500 hover:text-gray-700 px-4 py-2 mx-2"
          (click)="nextPage()"
          [disabled]="(currentPage$ | async) === (totalPages$ | async)"
        >
          Next
        </button>
      </div>
    </div>
  `,
  animations: [AnimationsModule.fade],
})
export class BuildingsComponent implements OnInit {
  currentPage$!: Observable<number>;
  totalPages$!: Observable<number>;
  isLoading$!: Observable<boolean>;
  buildings$!: Observable<Building[]>;

  constructor(
    private buildingsService: BuildingService,
    private route: ActivatedRoute,
    public userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    const buildingsData$ = this.route.queryParams.pipe(
      switchMap((params) =>
        this.buildingsService.getBuildings(params['page'] || 1)
      ),
      shareReplay(1)
    );
    this.buildings$ = buildingsData$.pipe(
      map((data: any) => data.data.buildings)
    );
    this.totalPages$ = buildingsData$.pipe(
      map((data: any) => data.data.pagination.total_pages)
    );
    this.currentPage$ = this.route.queryParams.pipe(
      map((params) => (params['page'] ? Number(params['page']) : 1))
    );
    const loading$ = of(true).pipe(delay(1000));
    const dataArrived$ = buildingsData$.pipe(map(() => false));
    this.isLoading$ = race(loading$, dataArrived$).pipe(startWith(true));
  }

  public nextPage(): void {
    this.currentPage$.pipe(take(1)).subscribe((currentPage) => {
      this.router.navigate([`/buildings`], {
        queryParams: { page: currentPage + 1 },
      });
    });
  }

  public previousPage(): void {
    this.currentPage$.pipe(take(1)).subscribe((currentPage) => {
      if (currentPage > 1) {
        this.router.navigate(['/buildings'], {
          queryParams: { page: currentPage - 1 },
        });
      }
    });
  }
}

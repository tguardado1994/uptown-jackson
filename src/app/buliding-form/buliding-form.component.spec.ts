import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulidingFormComponent } from './buliding-form.component';

describe('BulidingFormComponent', () => {
  let component: BulidingFormComponent;
  let fixture: ComponentFixture<BulidingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulidingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulidingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

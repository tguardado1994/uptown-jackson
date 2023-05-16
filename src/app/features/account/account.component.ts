import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Observable, map } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account',
  template: `

    <!-- <div *ngIf="user$ | async as user">
       -->
       <div
       class="text-center" style="margin-top: 20px;">

      <!-- <h2>{{ user.name }}</h2> -->
      <h5>First Name: {{user$.first_name}} </h5>
      <h5>Last Name: {{user$.last_name}} </h5>
      <h5>Email: {{ user$.email }}</h5>
      <!-- Add more fields as needed -->

      <div
      class="container card mt-5 position-relative p-5"
      style="max-width: 20rem;"
    >
    <button class="btn  rounded-circle position-absolute  top-0 end-0 d-flex justify-content-center align-items-center" (click)="editFormGroup.disabled? editFormGroup.enable() : editFormGroup.disable()">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        style="width: 1.5rem;height: 1.5rem"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
        />
      </svg>
     </button>

      <form [formGroup]="editFormGroup" (ngSubmit)="onSubmit()">

        <p>
          First Name <input style="border-radius: 7px;" type="text" formControlName="first_name" />
        </p>

        <p>
          Last Name <input style="border-radius: 7px;" type="text" formControlName="last_name"/>
        </p>

        <p>
          Email <input style="border-radius: 7px;" type="text" formControlName="email" >
        </p>


        <button style="margin-right: 45px; border-radius: 7px; width: 70px; height: 30px; " type="submit">Save</button>
        <button style="border-radius: 7px; width: 70px; height: 30px;" type="button" (click)="cancelEdit()">Cancel</button>
      </form>

    </div>


  `,
  styles: [

  ]
})
export class AccountComponent implements OnInit {
  public user$ = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@example.com',
  }
  // public user$= this.userService.user.pipe(map((user: any) => ))

  editFormGroup: FormGroup;
  isEditing: boolean = false;


  constructor(private userService: UserService) {
    this.editFormGroup = new FormGroup({
      first_name: new FormControl({value: this.user$.first_name, disabled: !this.isEditing}),
      last_name: new FormControl({value: this.user$.last_name, disabled: !this.isEditing}),
      email: new FormControl({value: this.user$.email, disabled: !this.isEditing})
    });
  }

  ngOnInit(): void {

  }

  edit(): void {
    this.isEditing = true;
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.editFormGroup.reset();
  }

  onSubmit(): void {
    // Save the changes and update the user object
    this.user$.first_name = this.editFormGroup.value.first_name;
    this.user$.last_name = this.editFormGroup.value.last_name;
    this.user$.email = this.editFormGroup.value.email;

    // Reset the form and exit edit mode
    this.editFormGroup.reset();
    this.isEditing = false;
  }
}

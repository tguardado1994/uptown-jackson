import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  template: `
    <div *ngIf="user$ | async as user">
      <!-- <h2>{{ user.name }}</h2> -->
      <p>Email: {{ user.email }}</p>
      <!-- Add more fields as needed -->
    </div>
  `,
  styles: [
  ]
})
export class AccountComponent implements OnInit {
  public user$= this.userService.user;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
}

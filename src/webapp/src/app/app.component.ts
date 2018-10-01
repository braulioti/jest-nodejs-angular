import {Component} from '@angular/core';
import {User} from './user.model';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  listUser: User[];

  constructor(
    public userService: UserService
  ) {
    this.user = new User();
    this.loadList();
  }

  save() {
    this.userService.create(this.user).subscribe((res) =>
      this.loadList()
    );
  }

  loadList() {
    this.listUser = [];
    this.userService.query().subscribe((res) => {
      this.listUser = res.body;
    });
  }
}

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
  isUpdate: boolean;

  constructor(
    public userService: UserService
  ) {
    this.user = new User();
    // this.userService.setMock(new UserMock());
    this.isUpdate = false;
    this.loadList();
  }

  save() {
    if (!this.isUpdate) {
      this.userService.create(this.user).subscribe((res: User) => {
        this.user = new User();
        this.loadList();
      });
    } else {
      this.userService.update(this.user).subscribe((res: User) => {
        this.user = new User();
        this.loadList();
      });
    }
  }

  loadList() {
    this.listUser = [];
    this.userService.findAll().subscribe((res: User[]) => {
      this.listUser = res;
    });
  }

  loadItem(user: User) {
    this.userService.find(user.id).subscribe((res: User) => {
      this.user = Object.assign({}, user);
      this.isUpdate = true;
    });
  }

  remove(user: User) {
    this.userService.delete(user.id).subscribe((res: User) => {
      this.loadList();
    });
  }
}

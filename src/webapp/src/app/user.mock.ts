import {BaseMock} from '../shared/base/base.mock';
import {User} from './user.model';

export class UserMock extends BaseMock {
  constructor() {
    super();
    this.setItemMock(new User(1, 'Bráulio'));
    this.setItemMock(new User(2, 'Jhon'));
    this.setItemMock(new User(3, 'Silvia'));
  }
}

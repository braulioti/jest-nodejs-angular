import {Injectable} from '@angular/core';
import {User} from './user.model';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {BaseHttp} from '../shared/base/base-http';
import {BaseService} from '../shared/base/base.service';

@Injectable()
export class UserService extends BaseService {

  private resourceUrl = 'http://localhost:3000/user';

  constructor(public http: BaseHttp) {
    super(http);
  }

  create(user: User): Observable<User> {
    const copy = this.convert(user);
    return this.http.post<User>(this.resourceUrl, copy, {observe: 'response'});
  }

  update(user: User): Observable<User> {
    const copy = this.convert(user);
    return this.http.patch<User>(`${this.resourceUrl}/${user.id}`, copy, {observe: 'response'});
  }

  find(id: number): Observable<User> {
    return this.http.get<User>(`${this.resourceUrl}/${id}`, {observe: 'response'}, id);
  }

  findAll(): Observable<User[]> {
    return this.http.getAll<User>(this.resourceUrl, {observe: 'response'});
  }

  delete(id: number): Observable<User> {
    return this.http.delete<User>(`${this.resourceUrl}/${id}`, {observe: 'response'}, id);
  }

  /**
   * Convert a Processo to a JSON which can be sent to the server.
   */
  private convert(user: User): User {
    const copy: User = Object.assign({}, user);
    return copy;
  }
}

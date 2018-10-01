import {HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from './user.model';
import {Observable} from 'rxjs';
import {createRequestOption} from '../shared/model/request-util';
import 'rxjs/add/operator/map';
import {BaseHttp} from '../shared/base/base-http';
import {BaseService} from '../shared/base/base.service';

export type EntityResponseType = HttpResponse<User>;
export type EntityResponseTypeArray = HttpResponse<User[]>;

@Injectable()
export class UserService extends BaseService {

  private resourceUrl = 'http://localhost:3000/user';

  constructor(public http: BaseHttp) {
    super(http);
  }

  create(user: User): Observable<HttpResponse<User>> {
    const copy = this.convert(user);
    return this.http.post<EntityResponseType>(this.resourceUrl, copy, {observe: 'response'})
      .map((res: HttpResponse<User>) => res);
  }

  update(user: User): Observable<EntityResponseType> {
    const copy = this.convert(user);
    return this.http.put<EntityResponseType>(this.resourceUrl, copy, {observe: 'response'})
      .map((res: HttpResponse<User>) => res);
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<EntityResponseType>(`${this.resourceUrl}/${id}`, {observe: 'response'})
      .map((res: HttpResponse<User>) => res);
  }

  query(req?: any): Observable<HttpResponse<User[]>> {
    const options = createRequestOption(req);
    return this.http.get<EntityResponseTypeArray>(this.resourceUrl, {params: options, observe: 'response'})
      .map((res: HttpResponse<User[]>) => res);
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<EntityResponseType>(`${this.resourceUrl}/${id}`, {observe: 'response'});
  }

  /**
   * Convert a Processo to a JSON which can be sent to the server.
   */
  private convert(user: User): User {
    const copy: User = Object.assign({}, user);
    return copy;
  }
}

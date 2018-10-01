import {Injectable} from '@angular/core';
import {BaseHttp} from './base-http';

@Injectable()
export class BaseService {
  private mock;

  constructor(
    public http: BaseHttp
  ) {
    this.mock = null;
  }

  setMock(value: any) {
    this.mock = value;
    this.http.setMock(this.mock);
  }

  getMock(): any {
    return this.mock;
  }
}

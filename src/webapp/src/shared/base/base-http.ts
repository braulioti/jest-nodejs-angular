import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';

import {Observable} from 'rxjs';
import {BaseMock} from './base.mock';

@Injectable()
export class BaseHttp extends HttpClient {
  private mock: BaseMock;

  constructor(
    private httpHandler: HttpHandler
  ) {
    super(httpHandler);
  }

  setMock(value: BaseMock) {
    this.mock = value;
  }

  public delete<T>(url: string, options?: any): Observable<T> {
    if (!this.mock) {
      return this.callRequest<T>(() => {
        return super.delete<T>(url, options);
      });
    } else {
      return null;
    }
  }

  public patch<T>(url: string, body: any, options?: any): Observable<T> {
    if (!this.mock) {
      return this.callRequest<T>(() => {
        return super.patch<T>(url, options);
      });
    } else {
      return null;
    }
  }

  public head<T>(url: string, options?: any): Observable<T> {
    if (!this.mock) {
      return this.callRequest<T>(() => {
        return super.head<T>(url, options);
      });
    } else {
      return null;
    }
  }

  public options<T>(url: string, options?: any): Observable<T> {
    if (!this.mock) {
      return this.callRequest<T>(() => {
        return super.options<T>(url, options)
      });
    } else {
      return null;
    }
  }

  public get<T>(url: string, options?: any): Observable<T> {
    if (!this.mock) {
      return this.callRequest<T>(() => {
        return super.get<T>(url, options)
      });
    } else {
      return this.callRequest<T>(() => {
        return null;
      });
    }
  }

  public post<T>(url: string, body: any, options?: any): Observable<T> {
    if (!this.mock) {
      return this.callRequest<T>(() => {
        return super.post<T>(url, body, options)
      });
    } else {
      return null;
    }
  }

  public put<T>(url: string, body: any, options?: any): Observable<T> {
    if (!this.mock) {
      return this.callRequest<T>(() => {
        return super.put<T>(url, body, options)
      });
    } else {
      return null;
    }
  }

  private callRequest<T>(fn: Function): Observable<T> { return fn(); }

}

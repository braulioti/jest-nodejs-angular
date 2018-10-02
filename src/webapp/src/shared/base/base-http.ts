import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler, HttpResponse} from '@angular/common/http';

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

  public delete<T>(url: string, options?: any, id: number = -1): Observable<T> {
    if (!this.mock) {
      return super.delete<T>(url, options).map(
        (res: HttpResponse<T>) => {
          return res.body;
        });
    } else {
      return new Observable((observer) => {
        observer.next(this.mock.delete(id));
      });
    }
  }

  public patch<T>(url: string, body: any, options?: any): Observable<T> {
    if (!this.mock) {
      return super.patch<T>(url, body, options).map(
        (res: HttpResponse<T>) => {
          return res.body;
        });
    } else {
      return new Observable((observer) => {
        observer.next(this.mock.updateItem(body));
      });
    }
  }

  public head<T>(url: string, options?: any): Observable<T> {
    // TODO: Create method
    return null;
  }

  public options<T>(url: string, options?: any): Observable<T> {
    // TODO: Create method
    return null;
  }

  public get<T>(url: string, options?: any, id: number = -1): Observable<T> {
    if (!this.mock) {
      return super.get<T>(url, options).map(
        (res: HttpResponse<T>) => {
          return res.body;
        });
    } else {
      return new Observable((observer) => {
        observer.next(this.mock.findById(id));
      });
    }
  }

  public getAll<T>(url: string, options?: any): Observable<T[]> {
    if (!this.mock) {
      return super.get<T>(url, options).map(
        (res: HttpResponse<any>) => {
          return res.body;
        });
    } else {
      return new Observable((observer) => {
          observer.next(this.mock.getItemsMock());
      });
    }
  }

  public post<T>(url: string, body: any, options?: any): Observable<T> {
    if (!this.mock) {
      return super.post<T>(url, body, options).map(
      (res: HttpResponse<T>) => {
        return res.body;
      });
    } else {
      return new Observable((observer) => {
        observer.next(this.mock.insertItem(body));
      });
    }
  }

  public put<T>(url: string, body: any, options?: any): Observable<T> {
    if (!this.mock) {
      return super.put<T>(url, body, options).map(
        (res: HttpResponse<T>) => {
          return res.body;
        });
    } else {
      return new Observable((observer) => {
        observer.next(this.mock.updateItem(body));
      });
    }
  }
}

import {Inject, Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Todo} from './model/todo.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TodoService {

  constructor(private http: Http, @Inject('AUTH_TOKEN') private authToken: string) {
  }

  getAll(): Observable<Array<Todo>> {
    const headers: Headers = new Headers();
    headers.append('Authorization', localStorage.getItem(this.authToken));
    const requestOptions: RequestOptions = new RequestOptions();
    requestOptions.headers = headers;

    return this.http.get('https://your-app.com/todos', requestOptions)
      .map((res: any) => <Array<Todo>> res.json());
  }

}

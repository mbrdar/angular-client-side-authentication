import {Inject, Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class ContentService {

  constructor(private http: Http, @Inject('AUTH_TOKEN') private authToken: string) {
  }

  getProtectedData() {
    const headers: Headers = new Headers();
    headers.append('Authorization', localStorage.getItem(this.authToken));
    const requestOptions: RequestOptions = new RequestOptions();
    requestOptions.headers = headers;

    this.http.get('https://your-app.com/protected-endpoint', requestOptions).subscribe((test) => {
      console.log(test);
    });
  }

}

import {Injectable} from '@angular/core';
import {Headers, RequestOptionsArgs, Response, ResponseOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

/**
 * This class is used instead real Angular Http service from @angular/http package.
 * Main purpose of this class is to act like real backend and return fake http responses.
 * Do NOT use this class in production code, instead use real Angular Http service.
 */
@Injectable()
export class HttpService {

  constructor() {
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.checkCredentials(body);
  }


  private checkCredentials(body: any): Observable<Response> {
    if (body.email === 'test@test.com' && body.password === 'password') {
      return Observable.create(observer => {
        observer.next(this.mockSuccessResponse());
      });
    } else {
      return Observable.create(observer => {
        observer.error(this.mockErrorResponse());
      });
    }
  }

  // Simulate real server success response
  private mockSuccessResponse(): Response {
    return new Response(this.mockResponseOptions());
  }

  // Simulate real server error response
  private mockErrorResponse(): Response {
    return new Response(this.mockResponseOptions().merge({
      status: 401
    }));
  }

  // generate fake response options
  private mockResponseOptions(): ResponseOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Set-Authorization', 'tokenExample');

    return new ResponseOptions({
      headers: headers,
      status: 200,
      url: 'your-app.com/login-endpoint',
      body: `{"firstName": "John", "lastName": "Doe"}`
    });
  }
}

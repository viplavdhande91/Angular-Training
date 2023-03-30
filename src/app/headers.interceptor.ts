import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class HeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>,next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiKey = 'Qwery09876';

    request = request.clone({ setHeaders: { apiKey: apiKey } });
    return next.handle(request);
  }
}

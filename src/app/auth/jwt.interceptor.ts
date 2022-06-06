import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpErrorResponse
} from '@angular/common/http';

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {DataService} from '../data.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(
                private authService: DataService,
                private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');

        if (token) {
            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    token: `${token}`
                }
            });
        }

        return next.handle(request).pipe(tap(() => {},
            (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    this.authService.logout();
                    this.router.navigate(['/']);
                }
            }
        }));
    }
}

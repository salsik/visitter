import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AuthService} from '../../app/services/auth.service';

@Injectable()
export class SkyCallHttpInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService, private router: Router) {
    }

    // Intercept each http request globally
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
  /*              const errMsg = event.body.error;
                if (errMsg) {
                    if (errMsg === 'You should login first!') {
                        // debugger;
                        this.authService.destroy_session();
                        this.router.navigate(['/auth/login']);
                        this.utilService.showErrorToast('You need to login first !');
                        // this.messageService.displayToast(errMsg);
                    } else if (errMsg === 'Access token is incorrect !!') {
                        // dismiss
                    } else {
                        // this.messageService.displayToast(errMsg);
                    }
                }*/
            }
        }, (err: any) => {
            if (err.status === 401) {
                this.authService.destroy_session();
                this.router.navigate(['/auth/login']).then();
                // this.utilService.showErrorToast('You need to login first !');
            } else if (err.status === 500) {
                // this.messageService.displayToast(err.error.msg);
            }
        }));
    }
}

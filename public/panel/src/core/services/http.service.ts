import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class HttpService {
    token: any;

    constructor(
        public http: HttpClient
    ) {
    }


    delete(url: string, options?: any): Observable<any> {
        const token = this.getToken();
        options = options || {};
        options.headers = options.headers || {};
        options.headers.Authorization = token;
        return this.http.delete(url, options);
    }

    get(url: string, options?: any): Observable<any> {
        const token = this.getToken();
        options = options || {};
        options.headers = options.headers || {};
        options.headers.Authorization = token;
        return this.http.get(url, options);
    }

    head(url: string, options?: any): Observable<any> {
        const token = this.getToken();
        options = options || {};
        options.headers = options.headers || {};
        options.headers.Authorization = token;
        return this.http.head(url, options);
    }

    jsonp<T>(url: string, callbackParam: string): Observable<T> {
        return this.http.jsonp<T>(url, callbackParam);
    }

    options(url: string, options?: any): Observable<any> {
        const token = this.getToken();
        options = options || {};
        options.headers = options.headers || {};
        options.headers.Authorization = token;
        return this.http.options(url, options);
    }

    patch(url: string, body: any | null, options?: any): Observable<any> {
        const token = this.getToken();
        options = options || {};
        options.headers = options.headers || {};
        options.headers.Authorization = token;
        return this.http.patch(url, body, options);
    }

    post(url: string, body: any | null, options?: any): Observable<any> {
        const token = this.getToken();
        options = options || {};
        options.headers = options.headers || {};
        options.headers.Authorization = token;
        options.headers['content-type'] = 'application/json';
/*        options.headers['Content-Type'] = 'multipart/form-data';*/
        return this.http.post(url, body, options);
    }

    put(url: string, body: any | null, options?: any): Observable<any> {
        const token = this.getToken();
        options = options || {};
        options.headers = options.headers || {};
        options.headers.Authorization = token;
        return this.http.put(url, body, options);
    }

    private getToken(): string {
        if (localStorage.getItem('currentUserCallsAdmin')) {
            this.token = 'Bearer ' + JSON.parse(localStorage.getItem('currentUserCallsAdmin')).token;
            return this.token;
        }
        return '';
    }
}

import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {api} from '../../config/api';
import {HttpService} from '../../core/services/http.service';
import {NavController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public currentUser: any;
    public selectedDepartment: any;
    public onesignal: any;
    public endCall: any;
    public selectedId: any;
    public speaker = false;
    public fromNotification = false;

    constructor(
        public http: HttpClient, public http2: HttpService, public router: Router, public navCtrl: NavController
    ) {
        if (localStorage.getItem('currentUserCallsAdmin')) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUserCallsAdmin'));
        }
    }

    async start_session(token: string, user: any) {
        user['token'] = token;
        localStorage.setItem('currentUserCallsAdmin', JSON.stringify(user));
        localStorage.setItem('loginDateCallsAdmin', new Date() + '');
        this.currentUser = user;
        this.updateOnesignal(this.onesignal).subscribe((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }

    public destroy_session(): void {
        localStorage.removeItem('currentUserCallsAdmin');
        localStorage.removeItem('loginDateCallsAdmin');
        this.currentUser = null;
        this.selectedDepartment = null;
        this.speaker = null;
        this.onesignal = null;
        this.selectedId = null;

        this.navCtrl.navigateRoot('auth/login').then();
    }

    login(data: any): any {
        const body = JSON.stringify(data);
        const headers = new HttpHeaders();

        const url = environment.globalServerURL + 'login_user';

        return this.http.post(url, data, {headers, observe: 'response'});
    }

    private getToken(): string {
        if (this.currentUser && this.currentUser.token) {
            return this.currentUser.token;
        }
        return '';
    }

    public isAuthenticated(): boolean {
        return !!this.getToken();
    }

    public register(data: any): any {
        const url = environment.globalServerURL + 'register';
        return this.http.post(url, data);
    }


    isLoggedIn(): boolean {
        if (!this.currentUser) {
            return false;
        }
        if (!localStorage.getItem('loginDateCallsAdmin')) {
            return false;
        }
    }

    updateOnesignal(onesignal_id: string): any {
        const url = api.updateOnesignal + '?id=' + this.currentUser.id + '&onesignal_id=' + onesignal_id;
        return this.http2.get(url);
    }

    sendNotification(id: any): any {
        const url = api.sendNotification + '?id=' + id;
        return this.http2.get(url);
    }
}

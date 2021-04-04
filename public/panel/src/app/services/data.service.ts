import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {api} from '../../config/api';
import {AuthService} from './auth.service';
import {HttpService} from '../../core/services/http.service';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpService, private authService: AuthService) {
    }

    getDepartments(): any {
        const url = api.getAllDepartments + '?id=' + this.authService.currentUser.company.id;
        return this.http.get(url);
    }

    getDepartmentById(id): any {
        const url = api.getDepartment + '?id=' + id;
        return this.http.get(url);
    }

    getCompanyById(id): any {
        const url = api.getCompany + '?id=' + id;
        return this.http.get(url);
    }

    addCall(call): any {
        const url = api.addCall;
        return this.http.get(url, call);
    }

    getToken(url: string = 'https://viridian-hare-3569.twil.io/capability-token') {
        // admin https://corn-spider-8203.twil.io
        return this.http.get(url);
    }

    updatePeer(data) {
        const url = api.updateDepartment;
        return this.http.post(url, data);
    }

    getFormData(params) {
        const formData = new FormData();
        Object.keys(params).forEach(key => {
            const p = params[key];
            formData.append(key, p);
        });
        return formData;
    }
}

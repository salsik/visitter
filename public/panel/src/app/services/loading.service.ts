import {Injectable} from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    constructor(public loadingController: LoadingController) {
    }

    async showLoading() {
        const loading = await this.loadingController.create({
            message: 'Please wait...'
        });
        await loading.present();
    }

    async dismissLoading() {
        await this.loadingController.dismiss();
    }
}

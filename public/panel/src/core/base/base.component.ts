import {Router} from '@angular/router';
import {Injector} from '@angular/core';
import {DataService} from '../../app/services/data.service';
import {Toast} from '@ionic-native/toast/ngx';
import {ActionSheetController, ModalController, NavController, Platform, LoadingController} from '@ionic/angular';
import {AuthService} from '../../app/services/auth.service';
import {CameraService} from '../../app/services/camera.service';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {LoadingService} from '../../app/services/loading.service';

export class BaseComponent {
    public router: Router;
    public dataService: DataService;
    public toast: Toast;
    public navCtrl: NavController;
    public authService: AuthService;
    public modalController: ModalController;
    public cameraService: CameraService;
    public platform: Platform;
    public actionSheetController: ActionSheetController;
    public androidPermissions: AndroidPermissions;
    public statusBar: StatusBar;
    public loadingController: LoadingController;
    public loadingService: LoadingService;

    protected constructor(protected injector: Injector) {
        this.router = this.injector.get(Router);
        this.dataService = this.injector.get(DataService);
        this.toast = this.injector.get(Toast);
        this.navCtrl = this.injector.get(NavController);
        this.authService = this.injector.get(AuthService);
        this.modalController = this.injector.get(ModalController);
        this.cameraService = this.injector.get(CameraService);
        this.platform = this.injector.get(Platform);
        this.actionSheetController = this.injector.get(ActionSheetController);
        this.androidPermissions = this.injector.get(AndroidPermissions);
        this.statusBar = this.injector.get(StatusBar);
        this.loadingController = this.injector.get(LoadingController);
        this.loadingService = this.injector.get(LoadingService);
    }

    public displayToast(message, duration = 3000, position = 'bottom', showCloseButton = false): void {
        this.toast.showWithOptions({
            message,
            duration,
            position,
            addPixelsY: -60
        }).subscribe(
            toast => {
                // showed
            }
        );
    }

    protected setRoot(url, params = {}) {
        return this.navCtrl.navigateRoot(url, params);
    }

    protected pushPage(url, navParams = {}) {
        return this.navCtrl.navigateForward(url, navParams);
    }
}

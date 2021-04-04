import {Component, ViewChild} from '@angular/core';

import {IonRouterOutlet, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
import {OneSignal} from '@ionic-native/onesignal/ngx';
import {oneSignalConfig} from '../config/config';
import {Toast} from '@ionic-native/toast/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    @ViewChild(IonRouterOutlet, {static: false}) routerOutlet: IonRouterOutlet;
    counter = 0;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private authService: AuthService,
        private router: Router,
        public oneSignal: OneSignal,
        public toast: Toast
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.backgroundColorByHexString('#3880ff');
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
            this.initRoutes();
            this.initOneSignal();
            this.initBackToExit();
        });
    }

    initRoutes() {
        if (!this.authService.currentUser) {
            this.router.navigateByUrl('auth/login').then();
        } else {
            if (this.authService.currentUser.type === 'customer') {
                this.router.navigate(['/home']).then();
            } else {
                this.router.navigate(['/admin-twilio']).then();
            }
        }
    }

    public initOneSignal(): void {
        this.oneSignal.startInit(oneSignalConfig.appID, oneSignalConfig.googleProjectNumber);
        console.log('oneSignalConfig.appID', oneSignalConfig.appID);

        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

        this.oneSignal.getIds().then(ids => {
            console.log('ids', ids);
            if (this.authService.currentUser) {
                this.authService.updateOnesignal(ids.userId).subscribe((res) => {
                    console.log(res);
                }, (err) => {
                    console.log(err);
                });
            }
            this.authService.onesignal = ids.userId;
            // AuthService.oneSignalToken = ids.userId;
        });

        this.oneSignal.handleNotificationReceived().subscribe(() => {
        });

        this.oneSignal.handleNotificationOpened().subscribe((dataObject) => {
            console.log('dataObject.notification.payload', dataObject.notification.payload);
            this.authService.fromNotification = true;
        });
        this.oneSignal.endInit();
    }

    displayToast(message, duration = 3000, position = 'bottom', showCloseButton = false): void {
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

    initBackToExit() {
        this.platform.backButton.subscribeWithPriority(0, () => {
            if (this.routerOutlet && this.routerOutlet.canGoBack()) {
                this.routerOutlet.pop();
            } else {
                if (this.counter === 0) {
                    this.counter++;
                    this.displayToast('Press again to exit !');
                    setTimeout(() => {
                        this.counter = 0;
                    }, 3000);
                } else {
                    navigator['app'].exitApp();
                }
            }
        });
    }
}

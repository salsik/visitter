import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {Toast} from '@ionic-native/toast/ngx';
import {DataService} from './services/data.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';
import {HttpService} from '../core/services/http.service';
import {CameraService} from './services/camera.service';
import { Camera } from '@ionic-native/camera/ngx';
import {SkyCallHttpInterceptor} from '../core/services/http.interceptor';
import {OneSignal} from '@ionic-native/onesignal/ngx';
import {LoadingService} from './services/loading.service';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
    providers: [
        AndroidPermissions,
        StatusBar,
        SplashScreen,
        Toast,
        DataService,
        HttpService,
        CameraService,
        LoadingService,
        Camera,
        OneSignal,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: HTTP_INTERCEPTORS, useClass: SkyCallHttpInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

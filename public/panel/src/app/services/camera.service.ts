import {Injectable} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {api} from '../../config/api';

@Injectable({
    providedIn: 'root'
})
export class CameraService {
    options: CameraOptions = {
        quality: 70,
        targetWidth: 900,
        targetHeight: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        saveToPhotoAlbum: false
    };
    selectedImage: any;

    constructor(private camera: Camera, private http: HttpClient) {
    }

    async openCamera(type): Promise<any> {
        this.options.sourceType = type === 1 ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.SAVEDPHOTOALBUM;
        const image = await this.camera.getPicture(this.options);
        return image;
    }


    base64ToBlob(imageData) {
        const byteString = atob(imageData.split(',')[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);

        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], {type: 'image/jpeg'});
    }

    uploadImage(image: File): any {
        const token = 'Bearer ' + localStorage.getItem('telegram-token');
        const headers = new HttpHeaders({
            'Authorization': token.toString()
        });
        const formData: FormData = new FormData();
        formData.append('file', image);
        const url = api.addCall;
        return this.http.post(url, formData, {headers});
    }

    addCall(data: any): any {
        const token = 'Bearer ' +  JSON.parse(localStorage.getItem('currentUserCallsAdmin')).token;
        const headers = new HttpHeaders({
            'Authorization': token.toString()
        });
        const url = api.addCall;
        return this.http.post(url, data, {headers});
    }
}

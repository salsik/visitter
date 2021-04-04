import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../core/base/base.component';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.page.html',
    styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage extends BaseComponent implements OnInit {
    note: any = 'Note';
    myPhoto: any;
    profile = '../../../../assets/profile.png';

    constructor(injector: Injector, private nav: NavController) {
        super(injector);
        // this.rate = this.router.getCurrentNavigation().extras.state.rate;
    }

    ngOnInit() {
        this.authService.endCall = false;
    }

    async openAction() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Select Attachment',
            buttons: [{
                text: 'Open Camera',
                icon: !this.platform.is('ios') ? 'link' : null,
                role: 'library',
                handler: () => {
                    setTimeout(() => {
                        this.openCamera();
                    }, 0);
                }
            }, {
                text: 'cancel',
                icon: !this.platform.is('ios') ? 'close' : null,
                role: 'cancel',
            }
            ]
        });
        await actionSheet.present();
    }

    uploadAttachment() {
        setTimeout(() => {
            const fileInput = document.getElementById('pres-image');
            fileInput.click();
        }, 40);
    }

    openCamera() {
        this.cameraService.openCamera(1)
            .then((imageData) => {
                const photo = 'data:image/jpeg;base64,' + imageData;
                this.profile = photo;
                this.myPhoto = this.cameraService.base64ToBlob(photo);
                console.log('photo =>', photo);
            }).catch((error) => {
            console.dir(error);
        });
    }

    submit() {
        this.loadingService.showLoading().then(() => {
            const data = {
                note: this.note,
                image: this.myPhoto,
                dep_id: this.authService.selectedId,
                company_id: this.authService.currentUser.company.id
            };
            const formData = new FormData();
            formData.append('note', this.note);
            formData.append('image', this.myPhoto);
            formData.append('dep_id', this.authService.selectedId);
            formData.append('company_id', this.authService.currentUser.company.id);
            this.cameraService.addCall(formData).subscribe((res) => {
                this.authService.endCall = true;
                console.log(res);
                this.modalController.dismiss().then();
                this.loadingService.dismissLoading();
                this.nav.pop();
            }, (err) => {
                console.log(err);
                // this.displayToast(JSON.stringify(err));
                this.modalController.dismiss().then();
                this.loadingService.dismissLoading();
                this.nav.pop();
            });
        });
    }
}

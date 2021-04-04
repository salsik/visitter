import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../core/base/base.component';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage extends BaseComponent implements OnInit {
    their: any;
    localStream: any;
    list: any = [];
    colors = ['red', 'purple', 'blue', 'cyan'];
    customColors = [];
    isLoading = true;

    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit() {
        if (this.platform.is('cordova')) {
            this.platform.ready().then(() => {
                this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
                    result => console.log('Has permission?', result.hasPermission),
                    err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
                );
                this.androidPermissions.requestPermissions([
                    this.androidPermissions.PERMISSION.CAMERA,
                    this.androidPermissions.PERMISSION.MODIFY_AUDIO_SETTINGS,
                    this.androidPermissions.PERMISSION.RECORD_AUDIO
                ]);
                this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA]);
            });
        }
        this.getDepartments();
    }

    ionViewDidEnter() {
        if (this.authService.currentUser) {
            if (this.authService.endCall && this.authService.currentUser.company.request_selfie) {
                this.authService.endCall = false;
                this.pushPage('/call', {state: {id: this.authService.selectedId}}).then();
            }
        }

        if (!this.list.length) {
            this.getDepartments();
        }
    }

    getDepartments(): void {
        if (this.authService.currentUser) {
            this.isLoading = true;
            this.loadingService.showLoading().then(() => {
                this.dataService.getDepartments().subscribe((res) => {
                    console.log(res);
                    this.isLoading = false;
                    this.createColorsArray(res.content.data);
                    this.list = res.content.data;
                    this.loadingService.dismissLoading().then();
                }, (err) => {
                    this.isLoading = false;
                    this.list = [];
                    console.log(err);
                    this.loadingService.dismissLoading().then();
                    this.displayToast('Something went wrong, please try agian later !');
                });
                this.updateCompany();
            });
        }
    }

    call(id: any) {
        if (this.authService.currentUser.company.request_selfie) {
            this.authService.selectedId = id;
            this.pushPage('/user-details', {state: {id}}).then();
        } else {
            this.authService.selectedId = id;
            this.pushPage('/call/twilio', {state: {id}}).then();
        }
    }

    logout() {
        this.list = [];
        this.authService.destroy_session();
    }

    createColorsArray(data): void {
        data.forEach(element => {
            this.customColors.push(this.colors[Math.floor(Math.random() * this.colors.length)]);
        });
    }

    updateCompany() {
        this.dataService.getCompanyById(this.authService.currentUser.company.id).subscribe((res) => {
            this.authService.currentUser.company.request_selfie = +res.content.data.request_selfie === 1;
            this.authService.currentUser.company.selfie_message = res.content.data.selfie_message;
            this.authService.currentUser.company.companyName = res.content.data.companyName;
            localStorage.setItem('currentUserCallsAdmin', JSON.stringify(this.authService.currentUser));
        });
    }

    toggleSpeaker() {
        this.authService.speaker = !this.authService.speaker;
    }

    doRefresh(event) {
        setTimeout(() => {
            this.getDepartments();
            event.target.complete();
        }, 100);
    }

    /*
        ionViewDidEnter() {
            this.getMedia().then(() => {
                const peer = new Peer({
                    key: 'fc14e4d6-eaa2-4e11-9af1-850432eabea3',
                    debug: 3
                });

                peer.on('open', () => {
                    document.getElementById('my-id').textContent = peer.id;
                });

                document.getElementById('make-call').onclick = () => {
                    const mediaConnection = peer.call(this.their, this.localStream);
                    setEventListener(mediaConnection);
                };

    // Function to set an event listener
                const setEventListener = mediaConnection => {
                    mediaConnection.on('stream', stream => {
                        // Set a camera image to the video element and play it
                        const videoElm = document.getElementById('their-video') as HTMLVideoElement;
                        videoElm.srcObject = stream;
                        videoElm.play();
                    });
                };
                peer.on('call', mediaConnection => {
                    mediaConnection.answer(this.localStream);
                    setEventListener(mediaConnection);
                });
                peer.on('error', err => {
                    alert(err.message);
                });
                peer.on('close', () => {
                    alert('We have lost communication.');
                });
            });
        }

        async getMedia() {
            // camera image acquisition
            const str = await navigator.mediaDevices.getUserMedia({video: true, audio: true})
                .then(stream => {
                    // On success, the video element is set to a camera image and played back.
                    const videoElm = document.getElementById('my-video') as HTMLVideoElement;
                    videoElm.srcObject = stream;
                    videoElm.play();
                    // Save the camera image to a global variable so that it can be returned to the other party when a call comes in.
                    this.localStream = stream;
                }).catch(error => {
                    // Outputs error log in case of failure.
                    console.error('mediaDevice.getUserMedia() error:', error);
                    return;
                });
        }*/
}

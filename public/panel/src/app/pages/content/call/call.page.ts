import {ChangeDetectorRef, Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../core/base/base.component';
import Peer from 'skyway-js';
import {NavController} from '@ionic/angular';
import {UserDetailsPage} from '../user-details/user-details.page';

declare let sensors: any;

@Component({
    selector: 'app-call',
    templateUrl: './call.page.html',
    styleUrls: ['./call.page.scss'],
})
export class CallPage extends BaseComponent implements OnInit {
    their: any;
    localStream: any;
    peer: any;
    theirPeer: any;
    mediaConnection: any;
    status = 'Calling..';
    timerInterval: any;
    timer = '';
    try = 0;
    id: any;
    mute = false;
    speaker = false;
    devices: any;
    audioDevices: any;
    track: any;
    showBackdrop = false;
    sensorInterval: any;
    connectionMessage: any;
    showSpeakers = true;

    constructor(injector: Injector, private nav: NavController, private cdk: ChangeDetectorRef) {
        super(injector);
    }

    ngOnInit() {
        this.their = this.router.getCurrentNavigation().extras.state.id;
        this.authService.selectedDepartment = this.their;
        this.androidPermissions.requestPermissions([
            this.androidPermissions.PERMISSION.CAMERA,
            this.androidPermissions.PERMISSION.MODIFY_AUDIO_SETTINGS,
            this.androidPermissions.PERMISSION.RECORD_AUDIO
        ]);
        this.waitingCall(true);
        const videoElm = document.getElementById('my-video') as HTMLVideoElement;
        videoElm.srcObject = null;
        const videoElm2 = document.getElementById('their-video') as HTMLVideoElement;
        videoElm2.srcObject = null;
        this.dataService.getDepartmentById(this.their).subscribe((res) => {
            this.theirPeer = res.content.data.number;
            this.id = res.content.data.id;
            this.initCall();
        });
    }

    async initDevices() {
        this.devices = await navigator.mediaDevices.enumerateDevices();
        this.audioDevices = this.devices.filter(device => device.kind === 'audioinput');
        if (this.platform.is('cordova')) {
            sensors.enableSensor('PROXIMITY');
            this.sensorInterval = setInterval(() => {
                sensors.getState((values) => {
                    const status = values[0];
                    console.log('PROXIMITY', values[0]);
                    this.showBackdrop = +status === 0;
                    this.statusBar.backgroundColorByHexString(this.showBackdrop ? '#000000' : '#3880ff');
                    this.showBackdrop ? this.statusBar.styleDefault() : this.statusBar.styleLightContent();
                }, this.onError);
            }, 300);
        }
    }

    onSuccess(values) {
        const status = values[0];
        console.log('PROXIMITY', values[0]);
        this.showBackdrop = +status === 0;
        this.statusBar.backgroundColorByHexString(this.showBackdrop ? '#000000' : '#3880ff');
    }

    onError(error) {
        console.log('error !', error);
    }

    initCall() {
        this.initDevices().then(() => {
            this.getMedia(this.authService.speaker ? 1 : 2).then(() => {
                this.peer = new Peer( {
                    key: 'fc14e4d6-eaa2-4e11-9af1-850432eabea3',
                    debug: 3
                });
                if (this.peer) {
                    this.peer.on('open', () => {
                        this.startCall();
                    });

                    // Function to set an event listener
                    this.peer.on('call', mediaConnection => {
                    });
                    this.peer.on('connection', (conn) => {
                        conn.on('open', () => {
                            console.log('can work after close all !');
                        });
                        conn.on('data', (data) => {
                            // Will print 'hi!'
                            if (data === 'dismiss') {
                                this.endCall();
                                this.displayToast('Number busy please try again later !');
                            } else if (data === 'answered') {
                                this.status = 'Visitter';
                                console.log('its in !');
                                this.showSpeakers = false;
                                this.ringMusic(false);
                                this.startTimer();
                                this.cdk.detectChanges();
                                this.ringMusic(false);
                                /*     this.startTimer();*/
                                this.mediaConnection.answer(this.localStream);
                                /*       this.setEventListener(this.mediaConnection);*/
                            } else if (data === 'mute') {
                                this.muteMe(true);
                            } else if (data === 'unmute') {
                                this.muteMe(false);
                            }
                            console.log('data =>', data);
                        });
                    });
                    this.peer.on('data', (data) => {
                        console.log(data);
                    });
                    this.peer.on('error', err => {
                        // alert(err.message);
                        this.errorEnd();
                    });
                    this.peer.on('close', () => {
                        // alert('We have lost communication.');
                        if (this.try !== 8) {
                            this.endCall();
                        }
                    });
                }
            });
        });
    }

    setEventListener(mediaConnection) {
        mediaConnection.on('stream', stream => {
            // Set a camera image to the video element and play it
            /*            this.ringMusic(false);
                        this.startTimer();*/
            const videoElm = document.getElementById('their-video') as HTMLVideoElement;
            videoElm.srcObject = stream;
            videoElm.play();
            this.connectionMessage = this.peer.connect(this.mediaConnection.remoteId);
            this.connectionMessage.on('open', () => {
                //  this.connectionMessage.send(this.mute ? 'mute' : 'unmute');
            });
        });
        mediaConnection.on('close', () => {
            console.log('closed !');
            if (+this.authService.currentUser.request_selfie === 1) {
                this.presentModal().then();
            }
            this.endCall();
        });
    }

    startCall() {
        console.log(this.peer.id);
        this.status = 'Calling ..';
        this.cdk.detectChanges();
        this.waitingCall(false);
        this.ringMusic(true);
        this.mediaConnection = this.peer.call(this.theirPeer, this.localStream);
        this.setEventListener(this.mediaConnection);
    }

    async getMedia(idx = 2) {
        // camera image acquisition
        const audioSource = this.audioDevices[idx].deviceId;
        // {deviceId: audioSource ? {exact: audioSource} : undefined}
        const constraints = {
            audio: true
        };
        this.track = navigator.mediaDevices.getUserMedia(constraints)
            .then(stream => {
                // On success, the video element is set to a camera image and played back.
                const videoElm = document.getElementById('my-video') as HTMLVideoElement;
                videoElm.srcObject = stream;
                videoElm.volume = 0;
                videoElm.muted = true;
                videoElm.play();
                // Save the camera image to a global variable so that it can be returned to the other party when a call comes in.
                this.localStream = stream;
            }).catch(error => {
                // Outputs error log in case of failure.
                console.error('mediaDevice.getUserMedia() error:', error);
                return;
            });
    }

    endCall() {
        this.ringMusic(false);
        if (this.connectionMessage) {
            this.connectionMessage.send('dismiss');
        } else if (this.mediaConnection) {
            const conn = this.peer.connect(this.mediaConnection.remoteId);
            conn.on('open', () => {
                conn.send('dismiss');
            });
        }
        this.try = 8;
        // this.stopTimer();
        if (this.mediaConnection) {
            this.mediaConnection.close(true);
        }
        this.nav.pop().then(() => {
            try {
                this.peer.destroy();
            } catch (e) {
                this.peer = null;
            }
        });
    }

    errorEnd() {
        if (this.try > 0) {
            if (this.mediaConnection) {
                this.mediaConnection.close(true);
            }
            this.ringMusic(false);
            this.stopTimer();
            this.nav.pop().then();
            this.displayToast('We cannot connect at the moment, Please try again later !');
        } else {
            this.authService.sendNotification(this.id).subscribe((data) => {
                setTimeout(() => {
                    this.dataService.getDepartmentById(this.their).subscribe((res) => {
                        this.theirPeer = res.content.data.number;
                        console.log('restart call !!!');
                        this.ringMusic(false);
                        ++this.try;
                        this.startCall();
                    });
                }, 30000);
            }, (err) => {
                this.errorEnd();
            });

        }
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: UserDetailsPage
        });
        modal.onDidDismiss()
            .then((data) => {
                console.log('dismissed');
                this.nav.pop().then();
            });
        await modal.present();
    }

    ringMusic(play: boolean = true) {
        const music = document.getElementById('callRing') as HTMLAudioElement;
        play ? music.play() : music.pause();
    }

    waitingCall(play: boolean = true) {
        const music = document.getElementById('waitingRing') as HTMLAudioElement;
        play ? music.play() : music.pause();
    }

    startTimer() {
        let sec = 0;
        let seconds = '';
        let minutes = '';
        this.timerInterval = setInterval(() => {
            seconds = this.pad(++sec % 60);
            minutes = this.pad(parseInt(String(sec / 60), 10));
            this.timer = minutes + ':' + seconds;
            this.cdk.detectChanges();
        }, 1000);
    }

    pad(val) {
        return val > 9 ? val : '0' + val;
    }

    stopTimer() {
        clearInterval(this.timerInterval);
        console.log('closed !!');
        return false;
    }

    async callSpeaker() {
        if (this.localStream) {
            this.localStream.getTracks().forEach(track => {
                track.stop();
            });
        }
        this.speaker = !this.speaker;
        this.getMedia(this.speaker ? 1 : 2).then();
    }

    muteCall(): void {
        this.mute = !this.mute;
        if (this.connectionMessage) {
            this.connectionMessage.send(this.mute ? 'mute' : 'unmute');
        } else {
            const conn = this.peer.connect(this.mediaConnection.remoteId);
            conn.on('open', () => {
                conn.send(this.mute ? 'mute' : 'unmute');
            });
        }
    }

    muteMe(status: boolean) {
        const videoElm = document.getElementById('their-video') as any;
        videoElm.volume = status ? 0 : 1;
    }

    getIconMute(): string {
        return this.mute ? 'mic-off-outline' : 'mic-outline';
    }

    ionViewWillLeave() {
        sensors.disableSensor('PROXIMITY');
        clearInterval(this.sensorInterval);
        if (this.localStream) {
            this.localStream.getTracks().forEach(track => {
                track.stop();
            });
        }
        const videoElm = document.getElementById('my-video') as HTMLVideoElement;
        videoElm.srcObject = null;
        const videoElm2 = document.getElementById('their-video') as HTMLVideoElement;
        videoElm2.srcObject = null;
        /*        this.callSpeaker();*/
    }
}

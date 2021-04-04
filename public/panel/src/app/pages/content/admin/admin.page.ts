import {ChangeDetectorRef, Component, Injector, OnInit} from '@angular/core';
import Peer from 'skyway-js';
import {BaseComponent} from '../../../../core/base/base.component';

declare let sensors: any;

@Component({
    selector: 'app-admin',
    templateUrl: './admin.page.html',
    styleUrls: ['./admin.page.scss'],
})
export class AdminPage extends BaseComponent implements OnInit {
    their: any;
    localStream: any;
    peer: any;
    waiting = true;
    mediaConnection: any;
    showAnswer = true;
    stream: any;
    stream2: any;
    dataConnection: any;
    waitText = 'Connecting to server, please wait ...';
    icon = 'hourglass-outline';
    timerInterval: any;
    timer = '';
    inBackground = false;
    mute = false;
    speaker = false;
    devices: any;
    audioDevices: any;
    track: any;
    showBackdrop = false;
    sensorInterval: any;
    connectionMessage: any;

    constructor(injector: Injector, private cdk: ChangeDetectorRef) {
        super(injector);
    }

    ngOnInit() {
        document.addEventListener('resume', () => {
            this.inBackground = false;
        }, false);
        document.addEventListener('pause', () => {
            this.inBackground = true;
            this.speaker = false;
            this.authService.speaker = false;
            // this.callSpeaker();
        }, false);
        if (this.authService.fromNotification) {
            this.loadingService.showLoading().then(() => {
                setTimeout(() => {
                    if (this.authService.fromNotification) {
                        this.displayToast('We\'re sorry, we lost your call !');
                    }
                }, 12000);
            });

        }
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

    onError(error) {
        console.log('error !', error);
    }

    ionViewDidEnter() {
        this.initSkyway();
    }

    initSkyway(error = false) {
        this.androidPermissions.requestPermissions([
            this.androidPermissions.PERMISSION.CAMERA,
            this.androidPermissions.PERMISSION.MODIFY_AUDIO_SETTINGS,
            this.androidPermissions.PERMISSION.RECORD_AUDIO
        ]);
        this.initDevices().then(() => {
            this.dataService.getDepartmentById(this.authService.currentUser.department.id).subscribe((res) => {
                this.authService.currentUser.department.number = res.content.data.number;

                this.getMedia(this.authService.speaker ? 1 : 2).then(() => {

                    if (this.authService.currentUser.department.number !== '123456789') {
                        if (!error) {
                            this.peer = new Peer(this.authService.currentUser.department.number, {
                                key: 'fc14e4d6-eaa2-4e11-9af1-850432eabea3',
                                debug: 3
                            });
                        } else {
                            console.log('exception !');
                            this.peer = new Peer({
                                key: 'fc14e4d6-eaa2-4e11-9af1-850432eabea3',
                                debug: 3
                            });
                        }
                    } else {
                        this.peer = new Peer({
                            key: 'fc14e4d6-eaa2-4e11-9af1-850432eabea3',
                            debug: 3
                        });
                    }

                    this.peer.on('open', () => {
                        console.log(this.peer.id);
                        this.updatePeer(this.peer.id);
                    });

                    // Function to set an event listener
                    const setEventListener = mediaConnection => {
                        mediaConnection.on('stream', stream => {
                            // Set a camera image to the video element and play it
                            this.stream = stream;
                            const videoElm = document.getElementById('their-video') as HTMLVideoElement;
                            videoElm.srcObject = this.stream;
                            videoElm.muted = false;
                            videoElm.volume = 1;
                            console.log(videoElm);
                            videoElm.play();
                        });
                        mediaConnection.on('close', () => {
                            console.log('closed !');
                            this.endCall();
                        });
                    };
                    this.peer.on('call', mediaConnection => {
                        this.mediaConnection = mediaConnection;
                        setEventListener(this.mediaConnection);
                        this.loadingService.dismissLoading().then();
                        this.authService.fromNotification = false;
                        this.ringMusic();
                        setTimeout(() => {
                            if (this.showAnswer) {
                                this.endCall();
                            }
                        }, 15000);
                        if (this.inBackground) {
                            this.authService.sendNotification(this.authService.currentUser.department.id).subscribe((data) => {
                                console.log('notification send !');
                            });
                        }
                        this.waiting = false;
                        this.cdk.detectChanges();
                    });
                    this.peer.on('connection', (conn) => {
                        conn.on('open', () => {
                            console.log('can work after close all !');
                        });
                        conn.on('data', (data) => {
                            // Will print 'hi!'
                            if (data === 'dismiss') {
                                this.endCall();
                                // this.displayToast('Number busy please try again later !');
                            } else if (data === 'mute') {
                                this.muteMe(true);
                            } else if (data === 'unmute') {
                                this.muteMe(false);
                            }
                            console.log('data =>', data);
                        });
                    });
                    this.peer.on('error', err => {
                        if (err.message.toLowerCase().includes('is already in use')) {
                            this.displayToast('Trying to reconnect please wait ..');
                            this.initSkyway(true);
                        } else {
                            this.displayToast(err.message);
                            this.waiting = true;
                            this.cdk.detectChanges();
                            this.stopTimer();
                        }
                    });
                    this.peer.on('close', () => {
                        // alert('We have lost communication.');
                        this.waiting = true;
                        this.ringMusic(false);
                        this.cdk.detectChanges();
                        this.stopTimer();
                    });
                    this.peer.on('disconnected', (id) => {
                        //  alert('We have lost communication.');
                        this.waiting = true;
                        this.ringMusic(false);
                        this.stopTimer();
                        this.cdk.detectChanges();
                    });
                    this.peer.on('data', (data) => {
                        console.log(data);
                    });
                    this.peer.oniceconnectionstatechange = () => {
                        if (this.peer.iceConnectionState == 'disconnected') {
                            console.log('Disconnected');
                        }
                    };
                });
            });
        });
    }

    async getMedia(idx = 2) {
        // camera image acquisition
        // const audioSource = this.audioDevices[idx].deviceId;
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
        if (!this.showAnswer) {
            if (this.mediaConnection) {
                this.mediaConnection.close(true);
            }
            this.waiting = true;
            this.ringMusic(false);
            this.stopTimer();
            this.cdk.detectChanges();
            this.mute = false;
            this.muteMe(false);
            /*this.callSpeaker();*/
            this.showAnswer = true;
        } else {
            this.ringMusic(false);
            const conn = this.peer.connect(this.mediaConnection.remoteId);
            conn.on('open', () => {
                conn.send('dismiss');
                this.showAnswer = false;
                this.endCall();
            });
        }
    }

    ringMusic(play: boolean = true) {
        const music = document.getElementById('callRing') as HTMLAudioElement;
        play ? music.play() : music.pause();
    }

    answerCall() {
        this.mediaConnection.answer(this.localStream);
        const conn = this.peer.connect(this.mediaConnection.remoteId);
        conn.on('open', () => {
            conn.send('answered');
        });
        this.startTimer();
        this.showAnswer = false;
        this.cdk.detectChanges();
        this.ringMusic(false);
    }

    updatePeer(peer) {
        const data = {
            id: this.authService.currentUser.department.id.toString(),
            number: peer
        };
        this.dataService.updatePeer(data).subscribe((res) => {
            console.log(res);
            this.waitText = 'Waiting for a call, Happy Day';
            this.icon = 'checkbox-outline';
            this.cdk.detectChanges();
        }, (err) => {
            console.log(err);
        });
    }

    logout() {
        this.authService.destroy_session();
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
        this.timer = '';
        clearInterval(this.timerInterval);
        console.log('closed !!');
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

    callSpeaker() {
        if (this.localStream) {
            this.localStream.getTracks().forEach(track => {
                track.stop();
            });
        }
        const videoElm = document.getElementById('my-video') as HTMLVideoElement;
        videoElm.srcObject = null;
        const videoElm2 = document.getElementById('their-video') as HTMLVideoElement;
        videoElm2.srcObject = null;
        this.localStream = null;
        this.speaker = !this.speaker;
        this.authService.speaker = !this.authService.speaker;
        this.waitText = 'Changing audio source please wait !';
        this.icon = 'hourglass-outline';
        if (this.peer) {
            this.peer.destroy();
        }
        if (this.mediaConnection) {
            this.mediaConnection.close(true);
        }
        this.cdk.detectChanges();
        this.initSkyway();
        /*        this.getMedia(this.speaker ? 1 : 2).then(() => {
                    this.waitText = 'Waiting for a call, Happy Day';
                    this.icon = 'checkbox-outline';
                    this.cdk.detectChanges();
                });*/
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
    }
}

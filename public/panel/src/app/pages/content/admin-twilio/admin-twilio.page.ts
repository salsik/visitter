import {ChangeDetectorRef, Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../core/base/base.component';

declare var Twilio;

@Component({
    selector: 'app-admin-twilio',
    templateUrl: './admin-twilio.page.html',
    styleUrls: ['./admin-twilio.page.scss'],
})
export class AdminTwilioPage extends BaseComponent implements OnInit {
    their: any;
    peer: any;
    waiting = true;
    mediaConnection: any;
    showAnswer = true;
    waitText = 'Connecting to server, please wait ...';
    icon = 'hourglass-outline';
    timerInterval: any;
    timer = '';
    inBackground = false;
    mute = false;
    track: any;
    showBackdrop = false;
    connection = null;

    constructor(injector: Injector, private cdk: ChangeDetectorRef) {
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
        this.initCallToken();
    }


    initCallToken() {
        this.dataService.getToken(this.authService.currentUser.department.capability_token).subscribe((res: any) => {
            console.log(res);
            console.log('token => ', res.token);
            this.initTwilio(res.token);
        });
    }

    initTwilio(token) {
        console.log('twilio it in', token);
        Twilio.Device.setup(token);

        Twilio.Device.ready((device) => {
            console.log('Twilio.Device Ready!');
            this.waitText = 'Waiting for a call, Happy Day';
            this.icon = 'checkbox-outline';
            this.cdk.detectChanges();
            // document.getElementById('call-controls').style.display = 'block';
        });

        Twilio.Device.error((error) => {
            console.log('Twilio.Device Error: ' + error.message);
            this.endCall();
        });

        Twilio.Device.connect((conn) => {
            console.log('Successfully established call!');
        });

        Twilio.Device.disconnect((conn) => {
            console.log('Call ended.');
            this.endCall();
        });

        Twilio.Device.incoming((conn) => {
            console.log('Incoming connection from ' + conn.parameters.From);
            const archEnemyPhoneNumber = this.authService.currentUser.department.number;

            if (conn.parameters.From === archEnemyPhoneNumber) {
                conn.reject();
                console.log('It\'s your nemesis. Rejected call.');
            } else {
                // accept the incoming connection and start two-way audio
                this.connection = conn;
                this.showAnswer = true;
               // conn.accept();
            }
        });

        Twilio.Device.audio.on('deviceChange', this.updateAllDevices);
    }

    updateAllDevices() {
        /*this.updateDevices(طط, Twilio.Device.audio.speakerDevices.get());
        this.updateDevices(ringtoneDevices, Twilio.Device.audio.ringtoneDevices.get());*/
    }

    updateDevices(selectEl, selectedDevices) {
        selectEl.innerHTML = '';
        Twilio.Device.audio.availableOutputDevices.forEach((device, id) => {
            let isActive = (selectedDevices.size === 0 && id === 'default');
            selectedDevices.forEach((device: any) => {
                if (device.deviceId === id) {
                    isActive = true;
                }
            });

            const option = document.createElement('option');
            option.label = device.label;
            option.setAttribute('data-id', id);
            if (isActive) {
                option.setAttribute('selected', 'selected');
            }
            selectEl.appendChild(option);
        });
    }

    endCall() {
        this.waitingCall(false);
        if (this.connection) {
            this.connection.reject();
        }
        this.waiting = true;
        this.ringMusic(false);
        this.stopTimer();
        this.cdk.detectChanges();
        this.mute = false;
        try {
            Twilio.Device.disconnectAll();
        } catch (e) {
            console.log('twilio never init =>', e);
        }
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

    muteCall() {
        this.mute = !this.mute;
        Twilio.Device.activeConnection().mute(this.mute);
    }

    getIconMute(): string {
        return this.mute ? 'mic-off-outline' : 'mic-outline';
    }

    waitingCall(play: boolean = true) {
        const music = document.getElementById('waitingRing') as HTMLAudioElement;
        play ? music.play() : music.pause();
    }

    ringMusic(play: boolean = true) {
        const music = document.getElementById('callRing') as HTMLAudioElement;
        play ? music.play() : music.pause();
    }

    answerCall() {
        this.connection.accept();
        this.startTimer();
        this.showAnswer = false;
        this.cdk.detectChanges();
        this.ringMusic(false);
    }
}

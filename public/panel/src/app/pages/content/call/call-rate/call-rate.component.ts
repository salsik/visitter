import {ChangeDetectorRef, Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../../core/base/base.component';
import {NavController} from '@ionic/angular';

declare var Twilio;


@Component({
    selector: 'app-call-rate',
    templateUrl: './call-rate.component.html',
    styleUrls: ['./call-rate.component.scss'],
})
export class CallRateComponent extends BaseComponent implements OnInit {
    status = 'Calling..';
    timerInterval: any;
    timer = '';
    mute = false;
    their: any;
    departmentId = 0;
    departmentNumber = '';

    constructor(injector: Injector, private cdk: ChangeDetectorRef, private nav: NavController) {
        super(injector);
    }

    ngOnInit() {
        this.their = this.router.getCurrentNavigation().extras.state.id;
        this.authService.selectedDepartment = this.their;
        this.waitingCall(true);
        this.getDepartment();
    }

    getDepartment() {
        this.dataService.getDepartmentById(this.their).subscribe((res) => {
            this.departmentNumber = res.content.data.number;
            this.departmentId = res.content.data.id;
            console.log(this.departmentNumber);
            this.initCallToken();
        });
    }

    initCallToken() {
        this.dataService.getToken().subscribe((res: any) => {
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
            this.initCall();
            // document.getElementById('call-controls').style.display = 'block';
        });

        Twilio.Device.error((error) => {
            console.log('Twilio.Device Error: ' + error.message);
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
            const archEnemyPhoneNumber = '+12099517118';

            if (conn.parameters.From === archEnemyPhoneNumber) {
                conn.reject();
                console.log('It\'s your nemesis. Rejected call.');
            } else {
                // accept the incoming connection and start two-way audio
                conn.accept();
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

    initCall() {
        this.waitingCall(false);
        const params = {
            To: this.departmentNumber
        };
        Twilio.Device.connect(params);
    }

    endCall() {
        this.waitingCall(false);
        try {
            Twilio.Device.disconnectAll();
        } catch (e) {
            console.log('twilio never init =>', e)
        };
        this.nav.pop().then();
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
}




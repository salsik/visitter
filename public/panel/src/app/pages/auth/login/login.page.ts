import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../core/base/base.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BaseComponent implements OnInit {
    form: FormGroup;
    isLoading = false;
    passwordType = 'password';
    passwordIcon = 'eye-off';

    constructor(injector: Injector, private fb: FormBuilder) {
        super(injector);
    }

    ngOnInit() {
        this.bindForm().then();
        this.loadingService.dismissLoading().then();
    }

    /**
     * Submit login request
     */
    submit() {
        if (this.isLoading) {
            return;
        }
        this.isLoading = true;
        this.authService.login(this.form.value).subscribe(res => {
            this.isLoading = false;
            if (res.body.result === 'success') {
                const token = res.body.content[0].token;
                const user = res.body.content[0].user;
                localStorage.setItem('raiho-user', JSON.stringify(this.form.value));
                this.authService.start_session(token, user).then(() => {
                    if (this.authService.currentUser.type === 'customer') {
                        this.setRoot('/home').then();
                    } else {
                        this.setRoot('/admin-twilio').then();
                    }
                });
                this.displayToast('Welcome to Call Center !');
            } else {
                if (res.body.result === 'error') {
                    this.displayToast('Wrong Email or Password !');
                }
            }
        }, (err) => {
            this.isLoading = false;
            this.displayToast('Something went wrong, Please try again later !');
        });
    }

    /**
     * Bind form initial values
     */
    async bindForm() {
        this.form = this.fb.group({
            login_id: ['', Validators.required],
            password: ['', Validators.required]
        });
        if (localStorage.getItem('raiho-user')) {
            const data = JSON.parse(localStorage.getItem('raiho-user'));
            console.log(data);
            this.form.controls.login_id.setValue(data.login_id);
            this.form.controls.password.setValue(data.password);
        }
    }


    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }

}

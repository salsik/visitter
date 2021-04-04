import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../core/base/base.component';

@Component({
    selector: 'app-rate',
    templateUrl: './rate.page.html',
    styleUrls: ['./rate.page.scss'],
})
export class RatePage extends BaseComponent implements OnInit {
    rate: any;
    feedback: any;

    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit() {
    }

    setRate(rate) {
        console.log(rate);
        this.rate = rate;
    }

    goNext() {
        this.pushPage('/user-details', {state: {rate: this.rate}});
    }
}

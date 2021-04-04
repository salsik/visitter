import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CallRateComponent } from './call-rate.component';

describe('CallRateComponent', () => {
  let component: CallRateComponent;
  let fixture: ComponentFixture<CallRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallRateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CallRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

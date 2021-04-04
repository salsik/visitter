import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminTwilioPage } from './admin-twilio.page';

describe('AdminTwilioPage', () => {
  let component: AdminTwilioPage;
  let fixture: ComponentFixture<AdminTwilioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTwilioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminTwilioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsubmitsuccessComponent } from './formsubmitsuccess.component';

describe('FormsubmitsuccessComponent', () => {
  let component: FormsubmitsuccessComponent;
  let fixture: ComponentFixture<FormsubmitsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsubmitsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsubmitsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

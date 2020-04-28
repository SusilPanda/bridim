import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineFormSubmissionManagementComponent } from './online-form-submission-management.component';

describe('OnlineFormSubmissionManagementComponent', () => {
  let component: OnlineFormSubmissionManagementComponent;
  let fixture: ComponentFixture<OnlineFormSubmissionManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineFormSubmissionManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineFormSubmissionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

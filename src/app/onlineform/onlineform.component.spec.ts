import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineformComponent } from './onlineform.component';

describe('OnlineformComponent', () => {
  let component: OnlineformComponent;
  let fixture: ComponentFixture<OnlineformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

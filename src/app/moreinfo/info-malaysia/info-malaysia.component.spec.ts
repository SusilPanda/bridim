import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMalaysiaComponent } from './info-malaysia.component';

describe('InfoMalaysiaComponent', () => {
  let component: InfoMalaysiaComponent;
  let fixture: ComponentFixture<InfoMalaysiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoMalaysiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMalaysiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

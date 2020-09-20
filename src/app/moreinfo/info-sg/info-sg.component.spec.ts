import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSgComponent } from './info-sg.component';

describe('InfoSgComponent', () => {
  let component: InfoSgComponent;
  let fixture: ComponentFixture<InfoSgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

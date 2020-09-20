import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoJapanComponent } from './info-japan.component';

describe('InfoJapanComponent', () => {
  let component: InfoJapanComponent;
  let fixture: ComponentFixture<InfoJapanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoJapanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoJapanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

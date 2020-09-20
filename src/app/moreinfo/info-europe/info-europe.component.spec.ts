import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEuropeComponent } from './info-europe.component';

describe('InfoEuropeComponent', () => {
  let component: InfoEuropeComponent;
  let fixture: ComponentFixture<InfoEuropeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoEuropeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEuropeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

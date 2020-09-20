import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAustraliaComponent } from './info-australia.component';

describe('InfoAustraliaComponent', () => {
  let component: InfoAustraliaComponent;
  let fixture: ComponentFixture<InfoAustraliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAustraliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAustraliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

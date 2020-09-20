import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCanadaComponent } from './info-canada.component';

describe('InfoCanadaComponent', () => {
  let component: InfoCanadaComponent;
  let fixture: ComponentFixture<InfoCanadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCanadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCanadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUkComponent } from './info-uk.component';

describe('InfoUkComponent', () => {
  let component: InfoUkComponent;
  let fixture: ComponentFixture<InfoUkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoUkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

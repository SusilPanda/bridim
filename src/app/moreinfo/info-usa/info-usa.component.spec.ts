import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUsaComponent } from './info-usa.component';

describe('InfoUsaComponent', () => {
  let component: InfoUsaComponent;
  let fixture: ComponentFixture<InfoUsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoUsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNzComponent } from './info-nz.component';

describe('InfoNzComponent', () => {
  let component: InfoNzComponent;
  let fixture: ComponentFixture<InfoNzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoNzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

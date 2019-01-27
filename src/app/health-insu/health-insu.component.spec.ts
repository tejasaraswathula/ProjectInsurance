import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthInsuComponent } from './health-insu.component';

describe('HealthInsuComponent', () => {
  let component: HealthInsuComponent;
  let fixture: ComponentFixture<HealthInsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthInsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthInsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

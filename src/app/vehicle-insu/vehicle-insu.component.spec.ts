import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleInsuComponent } from './vehicle-insu.component';

describe('VehicleInsuComponent', () => {
  let component: VehicleInsuComponent;
  let fixture: ComponentFixture<VehicleInsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleInsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleInsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

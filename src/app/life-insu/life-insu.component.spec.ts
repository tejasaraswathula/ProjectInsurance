import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeInsuComponent } from './life-insu.component';

describe('LifeInsuComponent', () => {
  let component: LifeInsuComponent;
  let fixture: ComponentFixture<LifeInsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeInsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeInsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

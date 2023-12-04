import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictionComponent } from './restriction.component';

describe('RestrictionComponent', () => {
  let component: RestrictionComponent;
  let fixture: ComponentFixture<RestrictionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestrictionComponent]
    });
    fixture = TestBed.createComponent(RestrictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

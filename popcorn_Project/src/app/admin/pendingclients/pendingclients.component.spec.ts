import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingclientsComponent } from './pendingclients.component';

describe('PendingclientsComponent', () => {
  let component: PendingclientsComponent;
  let fixture: ComponentFixture<PendingclientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingclientsComponent]
    });
    fixture = TestBed.createComponent(PendingclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

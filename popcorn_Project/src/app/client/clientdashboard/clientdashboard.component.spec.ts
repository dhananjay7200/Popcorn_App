import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientdashboardComponent } from './clientdashboard.component';

describe('ClientdashboardComponent', () => {
  let component: ClientdashboardComponent;
  let fixture: ComponentFixture<ClientdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientdashboardComponent]
    });
    fixture = TestBed.createComponent(ClientdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

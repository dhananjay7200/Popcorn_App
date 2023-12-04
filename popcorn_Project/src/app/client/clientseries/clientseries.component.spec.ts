import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientseriesComponent } from './clientseries.component';

describe('ClientseriesComponent', () => {
  let component: ClientseriesComponent;
  let fixture: ComponentFixture<ClientseriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientseriesComponent]
    });
    fixture = TestBed.createComponent(ClientseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

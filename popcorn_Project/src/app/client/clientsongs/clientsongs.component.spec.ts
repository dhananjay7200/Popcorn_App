import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsongsComponent } from './clientsongs.component';

describe('ClientsongsComponent', () => {
  let component: ClientsongsComponent;
  let fixture: ComponentFixture<ClientsongsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsongsComponent]
    });
    fixture = TestBed.createComponent(ClientsongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientmovieComponent } from './clientmovie.component';

describe('ClientmovieComponent', () => {
  let component: ClientmovieComponent;
  let fixture: ComponentFixture<ClientmovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientmovieComponent]
    });
    fixture = TestBed.createComponent(ClientmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

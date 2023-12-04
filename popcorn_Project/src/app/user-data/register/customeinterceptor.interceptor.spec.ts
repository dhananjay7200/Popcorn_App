import { TestBed } from '@angular/core/testing';

import { CustomeinterceptorInterceptor } from './customeinterceptor.interceptor';

describe('CustomeinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CustomeinterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CustomeinterceptorInterceptor = TestBed.inject(CustomeinterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

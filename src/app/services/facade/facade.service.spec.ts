import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppState } from 'src/app/core/store/app.state';

import { FacadeService } from './facade.service';

describe('FacadeService', () => {
  let facade: FacadeService;
  let store: MockStore<AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()]
    });
    facade = TestBed.inject(FacadeService);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });
});

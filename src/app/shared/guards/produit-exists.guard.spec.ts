import { TestBed, async, inject } from '@angular/core/testing';

import { ProduitExistsGuard } from './produit-exists.guard';

describe('ProduitExistsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProduitExistsGuard]
    });
  });

  it('should ...', inject([ProduitExistsGuard], (guard: ProduitExistsGuard) => {
    expect(guard).toBeTruthy();
  }));
});

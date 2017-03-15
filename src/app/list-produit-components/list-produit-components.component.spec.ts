import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProduitComponentsComponent } from './list-produit-components.component';

describe('ListProduitComponentsComponent', () => {
  let component: ListProduitComponentsComponent;
  let fixture: ComponentFixture<ListProduitComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProduitComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProduitComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

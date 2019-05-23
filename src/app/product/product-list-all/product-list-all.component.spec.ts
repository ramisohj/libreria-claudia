import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListAllComponent } from './product-list-all.component';

describe('ProductListAllComponent', () => {
  let component: ProductListAllComponent;
  let fixture: ComponentFixture<ProductListAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

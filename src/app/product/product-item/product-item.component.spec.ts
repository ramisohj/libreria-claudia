import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductItemComponent } from './product-item.component';
import { from } from 'rxjs';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;
  let instance: ProductItemComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('sould erase the prduct', () =>{
    spyOn(instance, 'deleteItem');
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    expect(instance.deleteItem).toHaveBeenCalled();
  })
});

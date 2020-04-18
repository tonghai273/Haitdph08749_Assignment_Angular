import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManegerComponent } from './product-maneger.component';

describe('ProductManegerComponent', () => {
  let component: ProductManegerComponent;
  let fixture: ComponentFixture<ProductManegerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductManegerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductManegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

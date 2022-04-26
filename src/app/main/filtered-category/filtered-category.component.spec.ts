import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredCategoryComponent } from './filtered-category.component';

describe('FilteredCategoryComponent', () => {
  let component: FilteredCategoryComponent;
  let fixture: ComponentFixture<FilteredCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

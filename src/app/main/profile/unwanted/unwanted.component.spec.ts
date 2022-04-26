import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnwantedComponent } from './unwanted.component';

describe('UnwantedComponent', () => {
  let component: UnwantedComponent;
  let fixture: ComponentFixture<UnwantedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnwantedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnwantedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

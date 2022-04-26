import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesiredComponent } from './desired.component';

describe('DesiredComponent', () => {
  let component: DesiredComponent;
  let fixture: ComponentFixture<DesiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

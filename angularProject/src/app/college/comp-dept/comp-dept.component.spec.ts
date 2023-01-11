import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDeptComponent } from './comp-dept.component';

describe('CompDeptComponent', () => {
  let component: CompDeptComponent;
  let fixture: ComponentFixture<CompDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

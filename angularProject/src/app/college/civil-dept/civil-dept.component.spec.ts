import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilDeptComponent } from './civil-dept.component';

describe('CivilDeptComponent', () => {
  let component: CivilDeptComponent;
  let fixture: ComponentFixture<CivilDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

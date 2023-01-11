import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleDeptComponent } from './ele-dept.component';

describe('EleDeptComponent', () => {
  let component: EleDeptComponent;
  let fixture: ComponentFixture<EleDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

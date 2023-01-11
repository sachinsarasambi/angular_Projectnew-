import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashigmachineComponent } from './washigmachine.component';

describe('WashigmachineComponent', () => {
  let component: WashigmachineComponent;
  let fixture: ComponentFixture<WashigmachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashigmachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashigmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

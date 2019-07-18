import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpoSelectComponent } from './cpo-select.component';

describe('CpoSelectComponent', () => {
  let component: CpoSelectComponent;
  let fixture: ComponentFixture<CpoSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpoSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpoSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsBannerComponent } from './settings-banner.component';

describe('SettingsBannerComponent', () => {
  let component: SettingsBannerComponent;
  let fixture: ComponentFixture<SettingsBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


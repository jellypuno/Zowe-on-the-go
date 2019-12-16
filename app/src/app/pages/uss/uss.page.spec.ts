import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UssPage } from './uss.page';

describe('UssPage', () => {
  let component: UssPage;
  let fixture: ComponentFixture<UssPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UssPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

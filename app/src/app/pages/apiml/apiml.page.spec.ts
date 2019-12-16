import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApimlPage } from './apiml.page';

describe('ApimlPage', () => {
  let component: ApimlPage;
  let fixture: ComponentFixture<ApimlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApimlPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApimlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestartPage } from './restart.page';

describe('RestartPage', () => {
  let component: RestartPage;
  let fixture: ComponentFixture<RestartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

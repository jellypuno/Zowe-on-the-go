import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZosmfPage } from './zosmf.page';

describe('ZosmfPage', () => {
  let component: ZosmfPage;
  let fixture: ComponentFixture<ZosmfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZosmfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZosmfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

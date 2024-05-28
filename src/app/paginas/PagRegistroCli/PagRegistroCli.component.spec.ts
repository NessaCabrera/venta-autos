/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagRegistroCliComponent } from './PagRegistroCli.component';

describe('PagRegistroCliComponent', () => {
  let component: PagRegistroCliComponent;
  let fixture: ComponentFixture<PagRegistroCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagRegistroCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagRegistroCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

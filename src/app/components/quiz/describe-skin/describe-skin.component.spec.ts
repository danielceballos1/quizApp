/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DescribeSkinComponent } from './describe-skin.component';

describe('DescribeSkinComponent', () => {
  let component: DescribeSkinComponent;
  let fixture: ComponentFixture<DescribeSkinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescribeSkinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescribeSkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

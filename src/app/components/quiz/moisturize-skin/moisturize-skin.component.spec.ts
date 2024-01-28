/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoisturizeSkinComponent } from './moisturize-skin.component';

describe('MoisturizeSkinComponent', () => {
  let component: MoisturizeSkinComponent;
  let fixture: ComponentFixture<MoisturizeSkinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoisturizeSkinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoisturizeSkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interactive } from './interactive';

describe('Interactive', () => {
  let component: Interactive;
  let fixture: ComponentFixture<Interactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interactive],
    }).compileComponents();

    fixture = TestBed.createComponent(Interactive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

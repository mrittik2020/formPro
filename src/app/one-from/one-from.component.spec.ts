import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneFromComponent } from './one-from.component';

describe('OneFromComponent', () => {
  let component: OneFromComponent;
  let fixture: ComponentFixture<OneFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

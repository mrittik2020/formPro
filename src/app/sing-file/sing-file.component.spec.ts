import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingFileComponent } from './sing-file.component';

describe('SingFileComponent', () => {
  let component: SingFileComponent;
  let fixture: ComponentFixture<SingFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

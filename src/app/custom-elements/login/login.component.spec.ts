import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CELoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: CELoginComponent;
  let fixture: ComponentFixture<CELoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CELoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CELoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaButtonComponent } from './pa-button.component';

describe('ButtonPaComponent', () => {
  let component: PaButtonComponent;
  let fixture: ComponentFixture<PaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterStoryComponent } from './meter-story.component';

describe('MeterStoryComponent', () => {
  let component: MeterStoryComponent;
  let fixture: ComponentFixture<MeterStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

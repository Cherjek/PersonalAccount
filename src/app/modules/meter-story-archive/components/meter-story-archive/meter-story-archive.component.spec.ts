import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterStoryArchiveComponent } from './meter-story-archive.component';

describe('MeterStoryArchiveComponent', () => {
  let component: MeterStoryArchiveComponent;
  let fixture: ComponentFixture<MeterStoryArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterStoryArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterStoryArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

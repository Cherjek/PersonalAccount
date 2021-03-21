import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterStoryJournalComponent } from './meter-story-journal.component';

describe('MeterStoryJournalComponent', () => {
  let component: MeterStoryJournalComponent;
  let fixture: ComponentFixture<MeterStoryJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterStoryJournalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterStoryJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

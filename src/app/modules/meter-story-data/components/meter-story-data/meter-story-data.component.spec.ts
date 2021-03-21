import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterStoryDataComponent } from './meter-story-data.component';

describe('MeterStoryDataComponent', () => {
  let component: MeterStoryDataComponent;
  let fixture: ComponentFixture<MeterStoryDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterStoryDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterStoryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadHistoriesComponent } from './lead-histories.component';

describe('LeadHistoriesComponent', () => {
  let component: LeadHistoriesComponent;
  let fixture: ComponentFixture<LeadHistoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadHistoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadHistoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

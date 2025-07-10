import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnabilitySummaryComponent } from './winnability-summary.component';

describe('WinnabilitySummaryComponent', () => {
  let component: WinnabilitySummaryComponent;
  let fixture: ComponentFixture<WinnabilitySummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnabilitySummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnabilitySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

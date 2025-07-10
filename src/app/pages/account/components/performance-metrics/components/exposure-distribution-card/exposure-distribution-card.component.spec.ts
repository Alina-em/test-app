import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposureDistributionCardComponent } from './exposure-distribution-card.component';

describe('ExposureDistributionCardComponent', () => {
  let component: ExposureDistributionCardComponent;
  let fixture: ComponentFixture<ExposureDistributionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExposureDistributionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExposureDistributionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnabilityFactorsComponent } from './winnability-factors.component';

describe('WinnabilityFactorsComponent', () => {
  let component: WinnabilityFactorsComponent;
  let fixture: ComponentFixture<WinnabilityFactorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnabilityFactorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnabilityFactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

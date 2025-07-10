import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyCardsComponent } from './policy-cards.component';

describe('PolicyCardsComponent', () => {
  let component: PolicyCardsComponent;
  let fixture: ComponentFixture<PolicyCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplienceAndDocsComponent } from './complience-and-docs.component';

describe('ComplienceAndDocsComponent', () => {
  let component: ComplienceAndDocsComponent;
  let fixture: ComponentFixture<ComplienceAndDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplienceAndDocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplienceAndDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

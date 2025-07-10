import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterGroupComponent } from './search-filter-group.component';

describe('SearchFilterGroupComponent', () => {
  let component: SearchFilterGroupComponent;
  let fixture: ComponentFixture<SearchFilterGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchFilterGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFilterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

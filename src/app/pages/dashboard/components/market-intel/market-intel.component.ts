import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MarketIntelligenceItem } from '../../../../shared/interfaces/dashboard-interfaces/market-intel.interface';
import { Store } from '@ngrx/store';
import { selectMarketIntelligenceData } from '../../../../store/market-intel/market-intel.selectors';

import * as MarketIntelligenceActions from '../../../../store/market-intel/market-intel.actions';

@Component({
  selector: 'app-market-intel',
  imports: [CommonModule],
  templateUrl: './market-intel.component.html',
  styleUrl: './market-intel.component.scss'
})
export class MarketIntelComponent implements OnInit{
  intelligenceItems$: Observable<MarketIntelligenceItem[] | null>;

  constructor(private store: Store) {
    this.intelligenceItems$ = this.store.select(selectMarketIntelligenceData);
  }

  ngOnInit(): void {
    this.store.dispatch(MarketIntelligenceActions.MarketIntelligenceGet());
  }
}

import { Component, Signal } from '@angular/core';
import { ComplianceItem } from '../../../../shared/interfaces/account/compliance.interface';
import { ComplianceService } from './compliance.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-complience-and-docs',
  imports: [],
  templateUrl: './complience-and-docs.component.html',
  styleUrl: './complience-and-docs.component.scss'
})
export class ComplienceAndDocsComponent {
  checkedIconPath = '/assets/checkmarks/checked.svg';
  uncheckedIconPath = '/assets/checkmarks/unchecked.svg';

  complianceItems: Signal<ComplianceItem[] | undefined>;

  constructor(private complianceService: ComplianceService) {

    this.complianceItems = toSignal(this.complianceService.getCompliance());
  }
}

import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({ providedIn: 'root' })
export class IconService {
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
          'admin',
          sanitizer.bypassSecurityTrustResourceUrl('assets/icons/admin-icon.svg')
        );
        iconRegistry.addSvgIcon(
          'dashboard',
          sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dashboard-icon.svg')
        );
        iconRegistry.addSvgIcon(
          'accounts',
          sanitizer.bypassSecurityTrustResourceUrl('assets/icons/accounts-icon.svg')
        );
        iconRegistry.addSvgIcon(
          'brokers',
          sanitizer.bypassSecurityTrustResourceUrl('assets/icons/brokers-icon.svg')
        );
        iconRegistry.addSvgIcon(
          'submissions',
          sanitizer.bypassSecurityTrustResourceUrl('assets/icons/submissions-icon.svg')
        );
        iconRegistry.addSvgIcon(
          'organizations',
          sanitizer.bypassSecurityTrustResourceUrl('assets/icons/organizations-icon.svg')
        );
        iconRegistry.addSvgIcon(
          'goals-rules',
          sanitizer.bypassSecurityTrustResourceUrl('assets/icons/goals-rules-icon.svg')
        );
      }
}
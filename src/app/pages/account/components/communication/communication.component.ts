import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { Message } from '../../../../shared/interfaces/account/message.interface';
import { CommunicationService } from './communication.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { MessageCardComponent } from './message-card/message-card.component';
import { SearchbarComponent } from '../../../../shared/searchbar/searchbar.component';
import { SearchFilterGroupComponent } from '../../../../shared/search-filter-group/search-filter-group.component';

@Component({
  selector: 'app-communication',
  imports: [CommonModule,
     MessageCardComponent, 
    SearchFilterGroupComponent
    ],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.scss'
})
export class CommunicationComponent {
  attachmentIconPath = '/assets/attachments-icon.svg'
  messages: Signal<Message[] | undefined>;

  constructor(private communicationService: CommunicationService) {
    this.messages = toSignal(this.communicationService.getMessages());
  }
}

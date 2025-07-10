import { Component, input, signal } from '@angular/core';
import { Message } from '../../../../../shared/interfaces/account/message.interface';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-message-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './message-card.component.html',
  styleUrl: './message-card.component.scss'
})
export class MessageCardComponent {
  message = input.required<Message>();
  attachmentIconPath = input.required<string>();

  isReplyModalOpen = signal(false);
  replyMessage = signal('');

  constructor() { }

  onReplyClick(): void {
    this.isReplyModalOpen.set(true);
  }

  closeReplyModal(): void {
    this.isReplyModalOpen.set(false);
    this.replyMessage.set('');
  }

  sendReply(): void {
    console.log('Reply content:', this.replyMessage());
    this.closeReplyModal();
  }
}

import { Component, OnInit, signal } from '@angular/core';
import { Service3 } from '../service3';
import { MessageDto } from '../../dtos/message.dto';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-exemple3',
  imports: [FormsModule],
  templateUrl: './exemple3.html',
  styleUrl: './exemple3.scss',
})
export class Exemple3 implements OnInit {
  newMessage: string = '';
  messages = signal(<MessageDto[]>[]);

  constructor(private service: Service3) {}

  async ngOnInit() {
    await this.getMessages();
  }

  async getMessages() {
    const msg = await firstValueFrom(this.service.getMessages());
    this.messages.set(msg);
  }

  async addMessage() {
    if (this.newMessage.trim().length > 0) {
      await firstValueFrom(this.service.addMessage({ content: this.newMessage.trim() }));
      await this.getMessages();
      this.newMessage = '';
    }
  }

  async removeMessage(id: string) {
    await firstValueFrom(this.service.deleteMessage(id));
    await this.getMessages();
  }
}

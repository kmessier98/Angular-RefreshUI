import { Component } from '@angular/core';
import { Service3 } from '../service3';
import { MessageDto } from '../../dtos/message.dto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exemple3',
  imports: [FormsModule],
  templateUrl: './exemple3.html',
  styleUrl: './exemple3.scss',
})
export class Exemple3 {
  newMessage: string = "";
  messages: MessageDto[] = [];

  constructor(private service: Service3) {}

  addMessage() {
    if (this.newMessage.trim().length > 0) {
      const id = (Math.random() * 1000000).toFixed(0);
      this.messages.push(({ id: id, content: this.newMessage.trim() }));
      this.newMessage = "";
    }
  }

  removeMessage(id: string) {
    this.messages = this.messages.filter(msg => msg.id !== id);
  }
}

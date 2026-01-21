import { Component } from '@angular/core';
import { MessageDto } from '../../dtos/message.dto';
import { Service5 } from '../service5';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exemple5',
  imports: [FormsModule],
  templateUrl: './exemple5.html',
  styleUrl: './exemple5.scss',
})
export class Exemple5 {
  newMessage: string = "";
  messages: MessageDto[] = [];
  
  constructor(private service: Service5) {}

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

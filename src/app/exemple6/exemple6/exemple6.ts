import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Service6 } from '../service6';
import { MessageDto } from '../../dtos/message.dto';

@Component({
  selector: 'app-exemple6',
  imports: [FormsModule],
  templateUrl: './exemple6.html',
  styleUrl: './exemple6.scss',
})
export class Exemple6 {
  newMessage: string = "";
  messages: MessageDto[] = [];
  
  constructor(private service: Service6) {}

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

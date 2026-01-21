import { Component } from '@angular/core';
import { Service4 } from '../service4';
import { MessageDto } from '../../dtos/message.dto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exemple4',
  imports: [FormsModule],
  templateUrl: './exemple4.html',
  styleUrl: './exemple4.scss',
})
export class Exemple4 {
  newMessage: string = "";
  messages: MessageDto[] = [];
  
  constructor(private service: Service4) {}

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

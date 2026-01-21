import { Component } from '@angular/core';
import { Service1 } from '../service1';
import { FormsModule } from '@angular/forms';
import { MessageDto } from '../../dtos/message.dto';


@Component({
  selector: 'app-exemple1',
  imports: [FormsModule],
  templateUrl: './exemple1.html',
  styleUrl: './exemple1.scss',
})
export class Exemple1 {
  newMessage: string = "";
  messages: MessageDto[] = [];

  constructor(private service: Service1) {}

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

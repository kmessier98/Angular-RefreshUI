import { Component } from '@angular/core';
import { MessageDto } from '../../dtos/message.dto';
import { FormsModule } from '@angular/forms';
import { Service2 } from '../service2/service2';

@Component({
  selector: 'app-exemple2',
  imports: [FormsModule],
  templateUrl: './exemple2.html',
  styleUrl: './exemple2.scss',
  providers: [Service2]
})
export class Exemple2 {
    newMessage: string = "";
    messages: MessageDto[] = [];

  constructor(private service: Service2) {}

  addMessage() {
    if (this.newMessage.trim().length > 0) {
      const id = (Math.random() * 1000000).toFixed(0);
      this.messages.push(({ id: id, content: this.newMessage.trim() }));
      this.newMessage = "";
    }
  }

  removeMessage(id: string) {
    this.messages = this.messages.filter(msg => msg.id !== id);
    console.log(this.messages);
  }
}

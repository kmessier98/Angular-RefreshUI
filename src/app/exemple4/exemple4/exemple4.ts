import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Service4 } from '../service4';
import { MessageDto } from '../../dtos/message.dto';
import { FormsModule } from '@angular/forms';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-exemple4',
  imports: [FormsModule],
  templateUrl: './exemple4.html',
  styleUrl: './exemple4.scss',
})
export class Exemple4 implements OnInit {
  newMessage: string = '';
  messages: MessageDto[] = [];
  subscription = new Subscription();

  constructor(private service: Service4) {}

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    this.service.getMessages().subscribe((msg) => {
      this.messages = msg;
    });
  }

  addMessage() {
    if (this.newMessage.trim().length > 0) {
      this.service.addMessage({ content: this.newMessage.trim() }).subscribe(() => {
        tap(() => this.getMessages());
      });
      this.newMessage = '';
    }
  }

  removeMessage(id: string) {
    this.service.deleteMessage(id).subscribe(() => {
      this.getMessages();
    });
  }
}

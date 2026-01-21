import { Component, OnInit } from '@angular/core';
import { MessageDto } from '../../dtos/message.dto';
import { Service5 } from '../service5';
import { FormsModule } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-exemple5',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './exemple5.html',
  styleUrl: './exemple5.scss',
})
export class Exemple5 implements OnInit {
  newMessage: string = '';
  messages$ = new Observable<MessageDto[]>();

  constructor(private service: Service5) {}

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages() {
    this.messages$ = this.service.getMessages();
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

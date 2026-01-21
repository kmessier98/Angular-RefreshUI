import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageDto } from '../dtos/message.dto';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service3 {
  url = 'https://my-new-project-e3774-default-rtdb.firebaseio.com/messages.json';

  constructor(private http: HttpClient) {}

  addMessage(message: MessageDto): Observable<void> {
    return this.http.post<void>(this.url, message);
  }

  getMessages(): Observable<MessageDto[]> {
    console.log(this.http.get<MessageDto[]>(this.url));

    return this.http.get<MessageDto[]>(this.url).pipe(
      map((data) => {
        if (!data) {
          return [];
        }

        return Object.entries(data).map(([key, value]) => ({
          ...value,
          id: key,
        }));
      }),
    );
  }

  deleteMessage(id: string): Observable<void> {
    console.log('sdadsdas');
    const deleteUrl = `https://my-new-project-e3774-default-rtdb.firebaseio.com/messages/${id}.json`;

    return this.http.delete<void>(deleteUrl);
  }
}

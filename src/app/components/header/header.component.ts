import { Component } from '@angular/core';
import { NewChatMessageService } from 'src/app/new-chat-message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private chatService: NewChatMessageService
  ){}
}

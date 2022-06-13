import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
})
export class NotificationItemComponent implements OnInit {

  notificationImage: string = 'https://upload.wikimedia.org/wikipedia/commons/0/09/Eiffel_Tower_from_Champ-de-Mars%2C_Paris_5_February_2019.jpg';

  constructor() { }

  ngOnInit() {}

}

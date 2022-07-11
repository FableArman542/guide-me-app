import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PostInfo } from 'src/app/models/post-info';
import { PostserviceService } from 'src/app/services/postservice/postservice.service';
import { UsersService } from 'src/app/services/usersservice/users.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {

  @Input() post: PostInfo;
  @Input() postId: string;
  @Input() alreadySaved: boolean;
  @Input() id: string;

  @Output() submitEvent = new EventEmitter();

  testImage: string = 'https://cdn.getyourguide.com/img/location/5ffeb392eb81e.jpeg/68.jpg';

  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit() { }

  openPost(): void {
    console.log('Open Post');
    console.log(this.post.places);
    this.router.navigate(['/guide-post'], { queryParams: { post: JSON.stringify(this.post) } });
  }

  getBudget(): string {
    let budget: number = 0;
    for (let i = 0; i < this.post.places.length; i++) {
      budget += this.post.places[i].budgetValue;
    }
    return budget + " " + this.post.places[0].budgetCurrency;
  }

  getTripLength(): string {
    let length: number = 1;
    for (let i = 0; i < this.post.places.length; i++) {
      if (this.post.places[i].day + 1 > length) {
        length = this.post.places[i].day + 1;
      }
    }
    if (length == 1) return length + " day";
    else return length + " days";
  }

  saveClicked(event):void {
    event.stopImmediatePropagation();
    console.log('Save Clicked');

    this.userService.addToSavedPosts(this.postId);

  }

  deleteClicked(event):void {
    event.stopImmediatePropagation();
    console.log('Delete Clicked ' + this.id);

    this.userService.deleteFromSavedPosts(this.id);

    this.submitEvent.emit();

  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostInfo } from 'src/app/models/post-info';

@Component({
  selector: 'app-profile-guide-post',
  templateUrl: './profile-guide-post.component.html',
  styleUrls: ['./profile-guide-post.component.scss'],
})
export class ProfileGuidePostComponent implements OnInit {

  @Input() post: PostInfo;

  constructor(private router: Router) { }

  ngOnInit() { }

  onPostClicked() {
    this.router.navigate(['/guide-post'], { queryParams: { post: JSON.stringify(this.post) } });
  }

}

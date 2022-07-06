import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostInfo } from '../models/post-info';
import { PlaceInfo } from '../models/place-info';
import { PostserviceService } from '../services/postservice/postservice.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  searchTerm: string;

  myLogo: string = 'assets/logo.svg';
  posts: PostInfo[];
  defaultUrl = 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
  newurl = 'https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  newnewurl = 'https://images.unsplash.com/photo-1656593257978-173199f84545?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'

  constructor(private router: Router, private postService: PostserviceService) { }

  ngOnInit() {

    this.postService.getPosts().subscribe(postsGotten => {

      let ps: PostInfo[] = [];
      postsGotten.map(post => {
        let postToAdd: PostInfo = new PostInfo(post['title'], post['tags'], post['description'], []);
        post['places'].map(place => {
          postToAdd.places.push(
            new PlaceInfo(parseInt(place['day']), place['location'], place['imageUrl'], place['description'], parseInt(place['budgetValue']), place['budgetCurrency'], place['length'])
          );
        });
        
        ps.push(postToAdd);

      });
      this.posts = ps;

    });
  }

  setSearchTerm(value) {
    console.log(value)
    this.searchTerm = value;
  }


}
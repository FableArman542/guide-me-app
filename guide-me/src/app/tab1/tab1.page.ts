import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostInfo } from '../models/post-info';
import { PlaceInfo } from '../models/place-info';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  myLogo = 'assets/logo.svg';
  posts: PostInfo[];
  defaultUrl = 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
  newurl = 'https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  newnewurl = 'https://images.unsplash.com/photo-1656593257978-173199f84545?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  
  constructor(private router : Router) {}

  ngOnInit() {
    this.posts = [
      new PostInfo('Post 1', ['tag1', 'tag2'], 'This is the first post', [
        new PlaceInfo(0, 'This is the first place',this.defaultUrl, "descricacao", 10, 'EUR', '1h'),
        new PlaceInfo(0, 'This is the first sec place',this.newnewurl, "descriasdascacao", 0, 'EUR', '1h'),
        new PlaceInfo(1, 'This is the second place', this.newurl, "descricacao", 10, 'EUR', '1h'),
        new PlaceInfo(2, 'This is the third place', this.newnewurl, "descricacao", 10, 'EUR', '1h')]),
      new PostInfo('Post 2', ['tag1', 'tag2'], 'This is the second post', [new PlaceInfo(0, 'This is the second place',       this.defaultUrl, "descricacao", 10, 'EUR', '1h')]),
      new PostInfo('Post 3', ['tag1', 'tag2'], 'This is the third post', [new PlaceInfo(0, 'This is the third place',         this.defaultUrl, "descricacao", 10, 'EUR', '1h')]),
      new PostInfo('Post 4', ['tag1', 'tag2'], 'This is the fourth post', [new PlaceInfo(0, 'This is the fourth place',       this.defaultUrl, "descricacao", 10, 'EUR', '1h')]),
      new PostInfo('Post 5', ['tag1', 'tag2'], 'This is the fifth post', [new PlaceInfo(0, 'This is the fifth place',         this.defaultUrl, "descricacao", 10, 'EUR', '1h')]),
      new PostInfo('Post 6', ['tag1', 'tag2'], 'This is the sixth post', [new PlaceInfo(0, 'This is the sixth place',         this.defaultUrl, "descricacao", 10, 'EUR', '1h')]),
      new PostInfo('Post 7', ['tag1', 'tag2'], 'This is the seventh post', [new PlaceInfo(0, 'This is the seventh place',     this.defaultUrl, "descricacao", 10, 'EUR', '1h')]),
      new PostInfo('Post 8', ['tag1', 'tag2'], 'This is the eighth post', [new PlaceInfo(0, 'This is the eighth place',       this.defaultUrl, "descricacao", 10, 'EUR', '1h')]),
      new PostInfo('Post 9', ['tag1', 'tag2'], 'This is the ninth post', [new PlaceInfo(0, 'This is the ninth place',         this.defaultUrl, "descricacao", 10, 'EUR', '1h')]),
      new PostInfo('Post 10', ['tag1', 'tag2'], 'This is the tenth post', [new PlaceInfo(0, 'This is the tenth place',        this.defaultUrl, "descricacao", 10, 'EUR', '1h')]),
      new PostInfo('Post 11', ['tag1', 'tag2'], 'This is the eleventh post', [new PlaceInfo(0, 'This is the eleventh place',  this.defaultUrl, "descricacao", 10, 'EUR', '1h')]),
      new PostInfo('Post 12', ['tag1', 'tag2'], 'This is the twelfth post', [new PlaceInfo(0, 'This is the twelfth place',    this.defaultUrl, "descricacao", 10, 'EUR', '1h')]),
    ];  }  }
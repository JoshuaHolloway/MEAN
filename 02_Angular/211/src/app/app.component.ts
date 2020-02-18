import { Component } from '@angular/core';

// [211]
import { Post } from './posts/post.model'; // .ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj';

  // [211]
  //storedPosts = [];
  storedPosts: Post[] = [];



  onPostAdded(post) {
    this.storedPosts.push(post);

    // [211]: Using interface ensures we don't
    //        do something like:
    // this.storedPosts.push(3);
  }
}
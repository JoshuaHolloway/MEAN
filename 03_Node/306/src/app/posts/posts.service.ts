import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './post.model';

// [305]
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();



  // [305] (Inject)
  constructor(private http: HttpClient) { }


  getPosts() {
    // [305]
    //return [...this.posts];

    this.http.get<{ message: string, posts: Post[] }>('http://localhost:3000/api/posts').subscribe((postData) => {

      // To listen we subscribe to the observable

      this.posts = postData.posts; // Comes from the server

      this.postsUpdated.next([...this.posts])
    });
    // data
    // errors
    // when it completes

    // Function is executed when we get a response
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    // [305]: Tied together with post.model.ts which gets data from app.js
    //const post: Post = { title: title, content: content };
    const post: Post = { id: null, title: title, content: content };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}

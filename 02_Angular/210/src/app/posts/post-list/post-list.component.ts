import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
    // posts = [
    //     { title: 'First Post', content: 'This is the 1st post\'s content', },
    //     { title: 'Second Post', content: 'This is the 2nd post\'s content', },
    //     { title: 'Third Post', content: 'This is the 3rd post\'s content', }
    // ];

    @Input() posts = [];
    // -We now need to make the posts property bindable from outside
    //  via property binding.
    // -@Input() allows us to bind to posts from the outside.
    // -By from the outside, we mean from the parent component.
    // -The parent is app.component.html

}
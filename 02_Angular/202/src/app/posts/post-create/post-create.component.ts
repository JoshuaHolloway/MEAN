import { Component } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html'
})
export class PostCreateComponent {

    private newPost: string = '';

    onAddPost(): void {
        alert('Post added!');

        this.newPost = 'The user\'s post';
    }
}
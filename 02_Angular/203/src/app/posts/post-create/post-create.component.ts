import { Component } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html'
})
export class PostCreateComponent {

    private newPost: string = '';

    onAddPost(postInput: HTMLInputElement): void {

        console.log(postInput);
        console.dir(postInput);

        alert('Post added!');

        //this.newPost = 'The user\'s post';
        this.newPost = postInput.value;
    }
}
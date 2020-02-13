import { Component } from '@angular/core';


@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html'
})
export class PostCreateComponent {

    private enteredValue: string = '';
    private newPost: string = 'NO CONTENT';
    private newPost2: string = 'NO CONTENT 2';

    onAddPost(postInput: HTMLInputElement): void {

        console.log(postInput);
        console.dir(postInput);

        alert('Post added!');

        //this.newPost = 'The user\'s post';
        this.newPost = postInput.value;

        // [204]
        this.newPost2 = this.enteredValue;
    }
}
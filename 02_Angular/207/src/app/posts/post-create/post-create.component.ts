import { Component } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

    private enteredValue: string = '';
    private newPost: string = 'NO CONTENT';
    private newPost2: string = 'NO CONTENT 2';

    onAddPost(): void {

        alert('Post added!');

        // [204]
        this.newPost2 = this.enteredValue;
    }
}
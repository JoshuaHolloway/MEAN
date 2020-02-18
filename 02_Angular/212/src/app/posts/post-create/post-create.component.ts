import { Component, EventEmitter, Output } from '@angular/core';

// [211]
import { Post } from '../post.model'; //.ts

// [212]
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

    private enteredTitle: string = '';
    private enteredContent: string = '';

    // -We want to emit an event here
    //  and listen for it in the template.

    // [211]
    // @Output() public postCreated = new EventEmitter();
    @Output() public postCreated = new EventEmitter<Post>();

    // -@Output() turns this into an event
    //  that we can listen to from outside this component.
    // -Specifically, we want to listen to this 
    //  from the parent component.
    // -We can now use Event-Binding in app.component.html/.ts.
    // -We want to get the post and store it in a list of posts.
    // -used for EVENT-BINDING
    //      --Sending data from app.component.html
    //      --Into post-create.component.ts [this file]
    //      --Data is passed in via:
    //          [postCreated]="onPostAdded($event)"

    // [212]
    // onAddPost(): void {
    onAddPost(form: NgForm): void {

        // [212]: Add form validation: 
        //  -Don't submit invalid form
        if (form.invalid) {
            return;
        }

        // [211]
        // const post = {
        //     title: this.enteredTitle,
        //     content: this.enteredContent
        // };
        const post: Post = {

            // [212]
            //title: this.enteredTitle,
            //content: this.enteredContent
            title: form.value.title_josh,
            content: form.value.content_josh
        };

        this.postCreated.emit(post);
    }
}
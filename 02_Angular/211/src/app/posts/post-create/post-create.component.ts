import { Component, EventEmitter, Output } from '@angular/core';

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
    @Output() public postCreated = new EventEmitter();
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

    onAddPost(): void {
        const post = {
            title: this.enteredTitle,
            content: this.enteredContent
        };
        this.postCreated.emit(post);
    }
}
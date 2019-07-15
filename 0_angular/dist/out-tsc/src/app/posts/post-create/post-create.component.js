import * as tslib_1 from "tslib";
// -Angular ships with a @Component decorator.
// -To use it you need to import it.
// -@angular/core is one of the packages Angular is comprised of.
// -This package includes features like the @Component dectorator.
import { Component } from '@angular/core';
// A component is created by creating a class
// We turn the class into a component via the @Component decorator
let PostCreateComponent = class PostCreateComponent {
    // A component is created by creating a class
    // We turn the class into a component via the @Component decorator
    constructor() {
        this.enteredValue = '';
        this.newPost = 'NO CONTENT';
    }
    // onAddPost(postInput: HTMLTextAreaElement) {
    //   console.log(postInput);
    //   this.newPost = this.enteredValue;
    // }
    onAddPost() { }
};
PostCreateComponent = tslib_1.__decorate([
    Component({
        // -The Componenent decorator takes some configuration in the form
        //  of a JavaScript object, which we pass to it via ({...})
        // -
        selector: 'app-post-create',
        templateUrl: './post-create.component.html' // Pass .html file
        // -You could pass in html to the template like follows:
        //  template: "<h1>stuff</h1>"
    })
], PostCreateComponent);
export { PostCreateComponent };
//# sourceMappingURL=post-create.component.js.map
// -Angular ships with a @Component decorator.
// -To use it you need to import it.
// -@angular/core is one of the packages Angular is comprised of.
// -This package includes features like the @Component dectorator.
import { Component } from '@angular/core';

// -A component is created by creating a class.
// -We turn the class into a component via the @Component decorator
@Component({
  // -The Componenent decorator takes some configuration in the form
  //  of a JSON object, which we pass to it via ({...})
  selector: 'app-post-create', // -The selector allows us to use the component
  templateUrl: './post-create.component.html', // Pass .html file
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredValue = 'Initial value for enteredValue :)';
  newPost = 'Initial value for newPost';

  onAddPost() {
    // alert('Post added!');
    // this.newPost = "The users's post";
    this.newPost = this.enteredValue;
  }
}

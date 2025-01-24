import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from '../posts.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-observe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observe.component.html',
  styleUrl: './observe.component.css'
})
export class ObserveComponent {
  // observable = new Observable<number>(subscriber => {
  //   subscriber.next(1);
  //   subscriber.next(2);
  //   subscriber.next(3);
  //   subscriber.complete();
  // })

  posts: any[] = [];
  errorMessage: string = '';
  constructor(private postService: PostsService) { }
  ngOnInit(): void {
    // this.observable.subscribe({
    //   next(value) {
    //     console.log('Recieved Value', value);
    //   },
    //   error(err) {
    //     console.error(err)
    //   },
    //   complete() {
    //     console.log("Observable Completed");
    //   }
    // })

    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
      }, error(err) {
        console.log(err);
      }, complete() {
        console.log("posts fetched succesfully");
      }
    })
  }
}

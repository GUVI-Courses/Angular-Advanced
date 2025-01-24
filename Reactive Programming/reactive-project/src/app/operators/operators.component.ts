import { Component, ElementRef, ViewChild } from '@angular/core';
import { catchError, combineLatest, debounceTime, filter, fromEvent, map, mergeMap, of, startWith, switchMap, take, tap, toArray } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-operators',
  standalone: true,
  imports: [],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.css'
})
export class OperatorsComponent {
  allPosts: any;
  @ViewChild('searchBox') searchBox!: ElementRef<HTMLInputElement>;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    //map operator
    this.updateToDouble([1, 2, 3]).subscribe(result => {
      //console.log(result);
    })

    this.filterEvenValues([5, 8, 4, 3, 2, 7]).subscribe(result => {
      //console.log(result);
    })

    this.fetchUserDetail([1, 2, 3]).subscribe(userDetails => {
      //console.log(userDetails)
    });

    this.allPosts = this.fetchPostForUsers([4, 5, 8]).subscribe(posts => {
      //console.log(posts)
    });

    //this.fetchData().subscribe(result => console.log(result));

    this.logValues([1, 2, 3]).subscribe(result => {
      //console.log(result)
    })

    this.takeFirstThree([1, 2, 3, 4, 5]).subscribe(result => {
      //console.log(result);
    })

    this.combineUserandPostData([1, 2, 3], [10, 20, 30]).subscribe(result => {
      //console.log(result);
    })

    this.userIdWithDefault(0, [1, 2, 3]).subscribe(result => {
      console.log(result);
    })

  }

  //map operator
  updateToDouble(value: number[]) {
    return of(...value).pipe(map(item => item * 2))
  }

  //filter
  filterEvenValues(value: number[]) {
    return of(...value).pipe(filter(item => item % 2 == 0));
  }

  //switchMap
  fetchUserDetail(userIds: number[]) {
    return of(...userIds).pipe(switchMap(id => this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)));
  }

  //mergeMap
  fetchPostForUsers(userIds: number[]) {
    return of(...userIds).pipe(mergeMap(id => this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)), toArray());
  }

  //catchError
  fetchData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/invalid').pipe(catchError(error => {
      console.error("Error occured : ", error);
      return of([]);
    }))
  }

  //debounceTime
  ngAfterViewInit(): void {
    // fromEvent(this.searchBox.nativeElement, 'input').pipe(debounceTime(1000), switchMap((event: Event) => {
    //   const query = (event.target as HTMLInputElement).value;
    //   return this.http.get(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
    // })).subscribe(results => {
    //   console.log(results)
    // })

  }
  //tap
  logValues(values: number[]) {
    return of(...values).pipe(tap(value => {
      //console.log(value)
    }));
  }

  //take
  takeFirstThree(userIds: number[]) {
    return of(...userIds).pipe(take(3))
  }

  //combineLatest
  combineUserandPostData(userIds: number[], postCounts: number[]) {
    return combineLatest([of(...userIds), of(...postCounts)])
  }

  //startWith
  userIdWithDefault(defaultId: number, userIds: number[]) {
    return of(...userIds).pipe(startWith(defaultId))
  }


}

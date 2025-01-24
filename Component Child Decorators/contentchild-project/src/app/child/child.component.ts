import { Component, ContentChild, contentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @ContentChild('title') title: ElementRef<any> | undefined;
  @ContentChildren('disc') disc: QueryList<any> | undefined;

  ngAfterContentInit(): void {
    this.title?.nativeElement.setAttribute('style', 'color:orange');
    this.disc?.first.nativeElement.setAttribute('style', 'color:blue');
    this.disc?.last.nativeElement.setAttribute('style', 'color:red');


  }
}

import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'viewchild-project';
  @ViewChildren('title') ptitle: QueryList<any> | undefined;
  @ViewChild('child') childComp: ChildComponent | undefined;
  ngOnInit(): void {
  }

  increment() {
    this.childComp?.addMore();
  }
  ngAfterViewInit(): void {
    this.ptitle?.first.nativeElement.setAttribute('style', 'color:red');
    this.ptitle?.last.nativeElement.setAttribute('style', 'color:pink');
  }


}

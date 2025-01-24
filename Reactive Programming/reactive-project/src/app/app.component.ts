import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObserveComponent } from "./observe/observe.component";
import { CommonModule } from '@angular/common';
import { OperatorsComponent } from "./operators/operators.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ObserveComponent, OperatorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("Task Completed")
  //   }, 5000)
  // })
  ngOnInit(): void {
    //   this.promise.then(result => {
    //     console.log(result);
    //   }).catch(error => {
    //     console.error(error);
    //   })
    // }

    //this.doTask();
  }

  // async doTask() {
  //   try {
  //     const result = await new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve("Async Task Completed")
  //       }, 5000)
  //     })
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}



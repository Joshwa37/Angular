import { Component, inject, signal, OnInit } from '@angular/core';
import { Service } from '../service/service'; 
import { tod } from '../app/todo2';
import {UpperCasePipe , SlicePipe} from '@angular/common'


//@component helps to create a customized tag we use it for add in the main.html to 
//add this page in the main file 
@Component({
  selector: 'app-todo',  //it is the name of the tag we use it in html<app-todo></app-todo>
  imports:[UpperCasePipe, SlicePipe],
  templateUrl: './todo.html',  //it helps to implement the definined html file element into the tag so where we use the tag it add the html element
  styleUrl: './todo.scss',  //it is for css element
})
export class Todo implements OnInit {
//Inject helps get the variable from the service.ts It main usecase is we cannot get the variable or class from different files
//here service is main file and they have some class or variable if any file want that we just use inject to get that

  to = inject(Service);
  todoitems = signal<Array<tod>>([]);
  role = signal('admin');//signal() it helps to send the data to the frontend we can use that in our webpage
                          //it also has input() when we use this in the html page where we need want the value 
                          // it just give it to that we need to use [nameof the input variable] bracket to get the input signal

//The constructor() is for Wiring: It is a native JavaScript feature. 
// Its only job in Angular is Dependency Injection. 
// It is where you request your Services, Routers, and HTTP tools. 
// At this exact millisecond, the component's data inputs do not exist yet.
//ngOnInit()  is for Data: 
// This is an Angular-specific lifecycle hook. 
// It fires exactly once, immediately after the constructor finishes wiring everything up. 
// At this phase, the inputs are locked in, and it is finally safe to trigger network pipelines.

  ngOnInit(): void {
    this.to.gettodo().subscribe((todos) => { //subscribe helps to open connection for the api call if the data is sended it close the connection
                                              //it is because the api call takes time but angular not wait for it so it makes the page to crash
                                              //we can also use livestram we need to open the connection so data will update lively and use 
                                              //unsubscribe() to close the connection
      this.todoitems.set(todos);
    });
  }
}

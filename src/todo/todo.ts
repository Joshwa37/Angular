import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { todo } from 'node:test';
import { Service } from '../service/service'; 
import {tod} from '../app/todo2'
import { Pipes } from "../components/pipes/pipes";  

@Component({
  selector: 'app-todo',
  imports: [RouterLink, Pipes],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  to = inject(Service);
  todoitems=signal<Array<tod>>([])

  ngOnInit():void{
    this.to.gettodo().subscribe((todos)=>{(this.todoitems.set(todos))
    })
  }


}

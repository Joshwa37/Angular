import { Component, inject, Injectable } from '@angular/core';
import {tod} from  '../app/todo2'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn:'root'
})

export class Service {
  http=inject(HttpClient)
  
  gettodo(){

  const url=`https://jsonplaceholder.typicode.com/todos/`;
  return this.http.get<Array<tod>>(url)
  }
  
}

import { HttpClient } from '@angular/common/http';  
import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch:'full',
        loadComponent:()=>{
            return import('../components/header/header').then((m)=>m.Headerscomp);
        }

    },
    {
        path:'todo',
        pathMatch:'full',
        loadComponent:()=>{
            return import('../todo/todo').then((m)=>m.Todo)
        }
    },
    {
        path:'directives',
        pathMatch:'full',
        loadComponent:()=>{
            return import('../components/directives/directives').then((m)=>m.DirectivesComp)
        }
    }
];

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivesComp } from '../components/directives/directives';
import { Headerscomp } from '../components/header/header';
import { Pipes } from '../components/pipes/pipes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
  styleUrl: './app.scss',
})
export class App {}

import { Component,signal} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-directives',
  imports: [RouterLink],
  templateUrl: './directives.html',
  styleUrl: './directives.scss',
})
export class DirectivesComp {

  val=signal(0)
  increment(){
    this.val.update((val)=>val+1)
  }
  decrement(){
    this.val.update((val)=>val-1)
  }
  reset(){
    this.val.set(0)
  }
  
  keys=signal("")
  keyuphandler(keypress : KeyboardEvent){
    this.keys.set(keypress.key)
  }
}

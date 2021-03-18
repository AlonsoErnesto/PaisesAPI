import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

import{ debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',

})
export class PaisInputComponent  implements OnInit {
  
  termino:string = "";
  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  debounce: Subject<string> = new Subject();
  @Input() placeholder:string = "";

  ngOnInit(){
    this.debounce
    .pipe(
      debounceTime(300)
    )
    .subscribe((valor)=>{
      this.onDebounce.emit(valor);
      console.log('sads',valor);
    })
    // this.debounce
    // .pipe(
    //   debounceTime(300))
    // .subscribe((valor)=>{
    //   console.log(valor);
    //   this.onDebounce.emit(valor);
    // })
  }

  teclaPrecionada(){
    this.debounce.next(this.termino)
    // const valor = event.target.value;
    // console.log(valor);
    // console.log(this.termino);
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }
 
   


}

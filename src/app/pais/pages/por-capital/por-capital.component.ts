import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

 
  constructor(private api:PaisService){}
 


  termino:string = '';
  getError:boolean = false
  paises:Country[] = [];
  

  sugerencias(termino:string){
    this.getError = false;
  }
  buscar(termino:string){
    
    this.getError=false;
    this.termino = termino;
    
    this.api.BuscarCapi(this.termino).subscribe((res)=>{
      console.log(res);
      this.paises = res;
    },(error)=>{
      this.getError = true;
    })
  }


 
}

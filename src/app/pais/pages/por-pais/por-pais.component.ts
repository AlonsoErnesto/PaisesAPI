import { Component, Input } from '@angular/core';

import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent   {


  constructor(private api:PaisService){}


  paisesSujeridos:Country[]=[];
  termino:string = '';
  getError:boolean = false
  paises:Country[] = [];
  mostrarSugerencias:boolean = false;

  sugerencias(termino:string){
    this.getError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.api.BuscarPais(termino).subscribe((paises) => this.paisesSujeridos = paises.splice(0,3),
    (error)=>{this.paisesSujeridos = [] });

  }
  buscar(termino:string){
    
    this.getError=false;
    this.termino = termino;
    
    this.api.BuscarPais(termino).subscribe((res)=>{
      console.log(res);
      this.paises = res;
    },(error)=>{
      this.getError = true;
      this.paises = [];
    })
  }

  buscarSugerido(termino:string){
    this.mostrarSugerencias = false;
    this.buscar(termino);
    
  }


}

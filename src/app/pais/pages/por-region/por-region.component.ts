import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent   {

  constructor(private service:PaisService){}


  regiones:string[] = ['Asia','Europe','Americas','Africa','Oceania','Antartida']
  regionActiva:string = "America";
  paises:Country[] = [];

  activarRegion(region:string){
    if(region === this.regionActiva){return ;}
    this.paises = [];
    this.regionActiva = region;
    this.service.BuscarRegion(region).subscribe((res)=>{
      console.log(res);
      this.paises = res;
    },(err)=>{
      console.log(err)
    })
  }

  operacionCSS(params:string){
    return (this.regionActiva == params)? 'btn btn-primary' : 'btn btn-outline-primary'
  }

}

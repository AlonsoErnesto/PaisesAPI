import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = "https://restcountries.eu/rest/v2";
 
  get httpParams(){
    return new  HttpParams().set('filds','name;capital;alpha2code;flag;population');
  }

  constructor(private http:HttpClient) { }
  buscarPais(){
    const url =''
  }
  

  BuscarPais(termino :string): Observable<Country[]> {
    const apiUrl :string = `${this.apiUrl}/name/${termino}`;
    
    return this.http.get<Country[]>(apiUrl,{params:this.httpParams});
  }
  BuscarCapi(capital :string): Observable<Country[]> {
    const apiUrl :string = `${this.apiUrl}/capital/${capital}`;
    
    return this.http.get<Country[]>(apiUrl,{params:this.httpParams});
  }

  BuscarPaisAlpha(alpha :string): Observable<Country> {
    const apiUrl :string = `${this.apiUrl}/alpha/${alpha}`;
    
    return this.http.get<Country>(apiUrl);
  }
   
  BuscarRegion(region :string): Observable<Country[]> {
    const apiUrl :string = `${this.apiUrl}/region/${region}`;
    
    return this.http.get<Country[]>(apiUrl,{params:this.httpParams});
  }
   


}

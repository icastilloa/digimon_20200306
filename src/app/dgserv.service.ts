import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DgservService {
  private DgApi:string = "https://digimon-api.herokuapp.com/api/digimon";
  constructor(private http :HttpClient) { }
  obtenerDigimons(): any {
    return this.http.get<any[]>(this.DgApi).pipe();
  }
}

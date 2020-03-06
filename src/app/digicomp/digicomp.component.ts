import { Component, OnInit } from '@angular/core';
import { DigiservService } from '../digiserv.service';

@Component({
  selector: 'app-digicomp',
  templateUrl: './digicomp.component.html',
  styleUrls: ['./digicomp.component.css']
})
export class DigicompComponent implements OnInit {

  digimones = [];
  listaDigimones :any[];
  niveles :Array<string>;
  nivelSeleccionado:string;
  constructor(private servicio:DigiservService) { }

  ngOnInit() {
    this.niveles = [];
    this.servicio.obtenerDigimons().subscribe(
      (data: any[])=>{
        this.digimones=data;
        this.listaDigimones=data;
        this.digimones.forEach(digimon => {
          this.niveles.push(digimon.level);
        });
        this.niveles = this.niveles.filter((v, i, a) => a.indexOf(v) === i);
    },
      (error: any) => {
        console.log(error)
    }
    ); 
  }
  filtrar() {
    let search:string = (<HTMLInputElement>document.getElementById("search")).value;
    let ns:string = this.nivelSeleccionado;
    if (search == "" && ns && ns =="0"){
      this.digimones = this.listaDigimones;
    }
    else {
      this.digimones = this.listaDigimones.filter(function(a,v) {
        if (ns && ns != "0"){
          return (a.id == parseInt(search,10) || a.name.toLowerCase().includes(search.toLowerCase()) && a.level == ns);
        }
        else
          return a.id == parseInt(search,10) || a.name.toLowerCase().includes(search.toLowerCase());
      });
    }
  }

  seleccionaNivel(valor){
    console.log(valor);
    this.nivelSeleccionado = valor;
    this.filtrar();
  }
}

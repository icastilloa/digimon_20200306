import { Component, OnInit } from '@angular/core';
import { DgservService } from '../dgserv.service';

@Component({
  selector: 'app-dgcompo',
  templateUrl: './dgcompo.component.html',
  styleUrls: ['./dgcompo.component.css']
})
export class DgcompoComponent implements OnInit {

  constructor(private servicio:DgservService) { }

  ngOnInit() {
    this.servicio.obtenerDigimons().subscribe(r=>{
      console.log(r);
    }); 
  }

}
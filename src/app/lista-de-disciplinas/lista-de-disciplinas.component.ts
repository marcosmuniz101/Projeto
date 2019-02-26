import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-disciplinas',
  templateUrl: './lista-de-disciplinas.component.html',
  styleUrls: ['./lista-de-disciplinas.component.css']
})
export class ListaDeDisciplinasComponent implements OnInit {


  
  disciplinas = [
    {periodo: 1, nome: "Algoritimos I"},
    {periodo: 2, nome: "Algoritimos II"},
    {periodo: 3, nome: "LPOO"},
  ];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-disciplinas',
  templateUrl: './lista-de-disciplinas.component.html',
  styleUrls: ['./lista-de-disciplinas.component.css']
})
export class ListaDeDisciplinasComponent implements OnInit {


  periodos = [ "Primeiro = ['Linguagem de Programação WEB', 'Redes de Computadores']", "Segundo = ['Estrutura I', 'LPOO']"]
  disciplinas = [
  ];
  constructor() { }

  ngOnInit() {
  }

}

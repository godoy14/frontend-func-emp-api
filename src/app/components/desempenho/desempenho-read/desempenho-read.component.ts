import { DesempenhoService } from './../desempenho.service';
import { Component, OnInit } from '@angular/core';
import { Desempenho } from '../desempenho.model';

@Component({
  selector: 'app-desempenho-read',
  templateUrl: './desempenho-read.component.html',
  styleUrls: ['./desempenho-read.component.css']
})
export class DesempenhoReadComponent implements OnInit {

  desempenhos:Desempenho[]
  displayedColumns = ['id', 'funcionario', 'titulo', 'data', 'action']

  constructor(private desempenhoService:DesempenhoService) { }

  ngOnInit(): void {
    this.desempenhoService.read().subscribe(desempenhos => {
      this.desempenhos = desempenhos
      console.log(desempenhos)
    })
  }

}

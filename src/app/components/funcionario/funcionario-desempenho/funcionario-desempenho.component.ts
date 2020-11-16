import { Funcionario } from './../funcionario.model';
import { DesempenhoService } from './../../desempenho/desempenho.service';
import { Component, OnInit } from '@angular/core';
import { Desempenho } from '../../desempenho/desempenho.model';
import { FuncionarioService } from '../funcionario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-funcionario-desempenho',
  templateUrl: './funcionario-desempenho.component.html',
  styleUrls: ['./funcionario-desempenho.component.css']
})
export class FuncionarioDesempenhoComponent implements OnInit {

  funcionario:Funcionario

  desempenhos:Desempenho[]

  displayedColumns = ['id', 'titulo', 'data', 'descricao', 'action']

  constructor(
    private funcionarioService:FuncionarioService,
    private desempenhoService:DesempenhoService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.funcionarioService.readById(id).subscribe(funcionario => {
      this.funcionario = funcionario;
    })

    this.desempenhoService.readByFuncionario(id).subscribe(desempenhos => {
      this.desempenhos = desempenhos;
    });


  }

}

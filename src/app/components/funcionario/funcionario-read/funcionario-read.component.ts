import { Funcionario } from './../funcionario.model';
import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.css']
})
export class FuncionarioReadComponent implements OnInit {

  funcionarios: Funcionario[]
  displayedColumns = ['id', 'nome', 'cargo', 'desempenho', 'action']

  constructor(private funcionarioService:FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarioService.read().subscribe(funcionarios => {
      this.funcionarios = funcionarios
      console.log(funcionarios)
    })
  }

}

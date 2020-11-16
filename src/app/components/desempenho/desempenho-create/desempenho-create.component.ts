import { Funcionario } from './../../funcionario/funcionario.model';
import { FuncionarioService } from './../../funcionario/funcionario.service';
import { DesempenhoService } from './../desempenho.service';
import { Desempenho } from './../desempenho.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desempenho-create',
  templateUrl: './desempenho-create.component.html',
  styleUrls: ['./desempenho-create.component.css']
})
export class DesempenhoCreateComponent implements OnInit {

  desempenho:Desempenho = {
    titulo: '',
    data: '',
    descricao: '',
    funcionario: null
  }

  funcionarios:Funcionario[]

  constructor(
    private desempenhoService:DesempenhoService,
    private funcionarioService:FuncionarioService,
    private router:Router) { }

  ngOnInit(): void {
    this.funcionarioService.read().subscribe(funcionarios => {
      this.funcionarios = funcionarios
    })

  }

  createDesempenho(): void {
    this.desempenhoService.create(this.desempenho).subscribe(() => {
      this.desempenhoService.showMessage('Desempenho criado')
      this.router.navigate(['/desempenhos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/desempenhos'])
  }

}

import { Funcionario } from './../funcionario.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-dados',
  templateUrl: './funcionario-dados.component.html',
  styleUrls: ['./funcionario-dados.component.css']
})
export class FuncionarioDadosComponent implements OnInit {

  funcionario:Funcionario

  displayedColumns = ['id', 'nome', 'telefone', 'email', 'salario', 'cargo']

  constructor(
    private funcionarioService:FuncionarioService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.funcionarioService.readById(id).subscribe(funcionario => {
      this.funcionario = funcionario;
    })
  }

  voltar(): void {
    this.router.navigate(['/funcionarios']);
  }

}

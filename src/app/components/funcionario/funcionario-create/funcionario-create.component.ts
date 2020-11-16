import { Cargo } from './../../cargo/cargo.model';
import { Funcionario } from './../funcionario.model';
import { FuncionarioService } from './../funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargoService } from '../../cargo/cargo.service';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {

  funcionario: Funcionario = {
    nome: '',
    telefone: '',
    email: '',
    salario: null,
    cargo: null
  }

  cargos:Cargo[]

  constructor(
    private funcionarioService:FuncionarioService,
    private cargoService:CargoService,
    private router:Router) { }

  ngOnInit(): void {
    this.cargoService.read().subscribe(cargos => {
      this.cargos = cargos
    })
  }

  createFuncionario(): void {
    this.funcionarioService.create(this.funcionario).subscribe(() => {
      console.log(this.funcionario)
      this.funcionarioService.showMessage('Funcionario Criado.')
      this.router.navigate(['/funcionarios'])
    })
  }

  cancel(): void {
    this.router.navigate(['/funcionarios'])
  }

}

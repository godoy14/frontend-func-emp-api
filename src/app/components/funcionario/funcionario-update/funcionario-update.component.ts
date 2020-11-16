import { Cargo } from './../../cargo/cargo.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';
import { CargoService } from '../../cargo/cargo.service';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.css']
})
export class FuncionarioUpdateComponent implements OnInit {

  funcionario:Funcionario

  cargos:Cargo[]

  constructor(
    private funcionarioService:FuncionarioService,
    private cargoService:CargoService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.funcionarioService.readById(id).subscribe(funcionario => {
      this.funcionario = funcionario
    });

    this.cargoService.read().subscribe(cargos => {
      this.cargos = cargos
    })
  }

  updateFuncionario(): void {
    this.funcionarioService.update(this.funcionario).subscribe(() => {
      this.funcionarioService.showMessage('Produto atualizado com sucesso.')
      this.router.navigate(['/funcionarios'])
    })
  }

  cancel(): void {
    this.router.navigate(['/funcionarios']);
  }

}

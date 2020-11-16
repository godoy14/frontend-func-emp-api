import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-funcionario-crud',
  templateUrl: './funcionario-crud.component.html',
  styleUrls: ['./funcionario-crud.component.css']
})
export class FuncionarioCrudComponent implements OnInit {

  constructor(
    private router:Router,
    private headerService:HeaderService
    ) {
      headerService.headerData = {
        title: 'Cadastro Funcionários',
        icon: 'emoji_people',
        routeUrl: '/funcionarios'
      }
    }

  ngOnInit(): void {
  }
  
  navigateToFuncionarioCreate(): void {
    this.router.navigate(['/funcionarios/create'])
  }

}

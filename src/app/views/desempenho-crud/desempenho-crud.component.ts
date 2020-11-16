import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desempenho-crud',
  templateUrl: './desempenho-crud.component.html',
  styleUrls: ['./desempenho-crud.component.css']
})
export class DesempenhoCrudComponent implements OnInit {

  constructor(
    private router:Router,
    private headerService:HeaderService
    ) {
    headerService.headerData = {
      title: 'Cadastro Desempenhos',
      icon: 'trending_up',
      routeUrl: '/desempenhos'
    }
  }

  ngOnInit(): void {
  }

  navigateToDesempenhoCreate(): void {
    this.router.navigate(['/desempenhos/create'])
  }

}

import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cargo-crug',
  templateUrl: './cargo-crug.component.html',
  styleUrls: ['./cargo-crug.component.css']
})
export class CargoCrugComponent implements OnInit {

  constructor(
    private router:Router,
    private headerService:HeaderService
    ) {
    headerService.headerData = {
      title: 'Cadastro Cargos',
      icon: 'view_headline',
      routeUrl: '/cargos'
    }
  }

  ngOnInit(): void {
  }

  navigateToCargoCreate(): void {
    this.router.navigate(['/cargos/create'])
  }

}

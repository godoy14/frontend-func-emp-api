import { Cargo } from './../cargo.model';
import { Component, OnInit } from '@angular/core';
import { CargoService } from '../cargo.service';

@Component({
  selector: 'app-cargo-read',
  templateUrl: './cargo-read.component.html',
  styleUrls: ['./cargo-read.component.css']
})
export class CargoReadComponent implements OnInit {

  cargos:Cargo[]
  displayedColumns = ['id', 'nome', 'action']

  constructor(private cargoService:CargoService) { }

  ngOnInit(): void {
    this.cargoService.read().subscribe(cargos => {
      this.cargos = cargos
      console.log(cargos)
    })
  }

}

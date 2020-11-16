import { Cargo } from './../cargo.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CargoService } from '../cargo.service';

@Component({
  selector: 'app-cargo-delete',
  templateUrl: './cargo-delete.component.html',
  styleUrls: ['./cargo-delete.component.css']
})
export class CargoDeleteComponent implements OnInit {

  cargo:Cargo

  constructor(
    private cargoService:CargoService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cargoService.readById(id).subscribe(cargo => {
      this.cargo = cargo;
    })
  }

  deleteCargo(): void {
    this.cargoService.delete(this.cargo.id).subscribe(() => {
      this.cargoService.showMessage('Cargo excluido.');
      this.router.navigate(['/cargos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/cargos'])
  }

}

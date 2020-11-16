import { Cargo } from './../cargo.model';
import { Component, OnInit } from '@angular/core';
import { CargoService } from '../cargo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cargo-update',
  templateUrl: './cargo-update.component.html',
  styleUrls: ['./cargo-update.component.css']
})
export class CargoUpdateComponent implements OnInit {

  cargo:Cargo

  constructor(
    private cargoService:CargoService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.cargoService.readById(id).subscribe(cargo => {
      this.cargo = cargo
    })
  }

  updateCargo(): void {
    this.cargoService.update(this.cargo).subscribe(() => {
      this.cargoService.showMessage('Cargo atualizado.')
      this.router.navigate(['/cargos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/cargos'])
  }

}

import { DesempenhoService } from './../desempenho.service';
import { Component, OnInit } from '@angular/core';
import { Desempenho } from '../desempenho.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-desempenho-update',
  templateUrl: './desempenho-update.component.html',
  styleUrls: ['./desempenho-update.component.css']
})
export class DesempenhoUpdateComponent implements OnInit {

  desempenho:Desempenho

  constructor(
    private desempenhoService:DesempenhoService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.desempenhoService.readById(id).subscribe(desempenho => {
      this.desempenho = desempenho
    })
  }

  updateDesempenho(): void {
    this.desempenhoService.update(this.desempenho).subscribe(() => {
      this.desempenhoService.showMessage('Desempenho atualizado.')
      this.router.navigate(['/desempenhos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/desempenhos'])
  }

}

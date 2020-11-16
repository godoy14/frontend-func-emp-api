import { DesempenhoService } from './../desempenho.service';
import { Desempenho } from './../desempenho.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-desempenho-delete',
  templateUrl: './desempenho-delete.component.html',
  styleUrls: ['./desempenho-delete.component.css']
})
export class DesempenhoDeleteComponent implements OnInit {

  desempenho:Desempenho

  constructor(
    private desempenhoService:DesempenhoService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.desempenhoService.readById(id).subscribe(desempenho => {
      this.desempenho = desempenho;
    })
  }

  deleteDesempenho(): void {
    this.desempenhoService.delete(this.desempenho.id).subscribe(() => {
      this.desempenhoService.showMessage('Desempenho excluido');
      this.router.navigate(['/desempenhos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/desempenhos'])
  }

}

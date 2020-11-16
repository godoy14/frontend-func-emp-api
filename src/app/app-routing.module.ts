import { FuncionarioDadosComponent } from './components/funcionario/funcionario-dados/funcionario-dados.component';
import { FuncionarioDesempenhoComponent } from './components/funcionario/funcionario-desempenho/funcionario-desempenho.component';
import { FuncionarioReadComponent } from './components/funcionario/funcionario-read/funcionario-read.component';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { FuncionarioCrudComponent } from './views/funcionario-crud/funcionario-crud.component'
import { CargoCrugComponent } from './views/cargo-crug/cargo-crug.component'
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { FuncionarioDeleteComponent } from './components/funcionario/funcionario-delete/funcionario-delete.component';
import { CargoCreateComponent } from './components/cargo/cargo-create/cargo-create.component';
import { CargoReadComponent } from './components/cargo/cargo-read/cargo-read.component';
import { CargoUpdateComponent } from './components/cargo/cargo-update/cargo-update.component';
import { CargoDeleteComponent } from './components/cargo/cargo-delete/cargo-delete.component';
import { DesempenhoCreateComponent } from './components/desempenho/desempenho-create/desempenho-create.component';
import { DesempenhoReadComponent } from './components/desempenho/desempenho-read/desempenho-read.component';
import { DesempenhoUpdateComponent } from './components/desempenho/desempenho-update/desempenho-update.component';
import { DesempenhoDeleteComponent } from './components/desempenho/desempenho-delete/desempenho-delete.component';
import { DesempenhoCrudComponent } from './views/desempenho-crud/desempenho-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "funcionarios",
    component: FuncionarioCrudComponent
  },
  {
    path: "cargos",
    component: CargoCrugComponent
  },
  {
    path: "funcionarios/create",
    component: FuncionarioCreateComponent
  },
  {
    path: "funcionarios/read",
    component: FuncionarioReadComponent
  },
  {
    path: "funcionarios/update/:id",
    component: FuncionarioUpdateComponent
  },
  {
    path: "funcionarios/delete/:id",
    component: FuncionarioDeleteComponent
  },
  {
    path: "cargos/create",
    component: CargoCreateComponent
  },
  {
    path: "cargos/read",
    component: CargoReadComponent
  },
  {
    path: "cargos/update/:id",
    component: CargoUpdateComponent
  },
  {
    path: "cargos/delete/:id",
    component: CargoDeleteComponent
  },
  {
    path:"desempenhos",
    component: DesempenhoCrudComponent
  },
  {
    path: "desempenhos/create",
    component: DesempenhoCreateComponent
  },
  {
    path: "desempenhos/read",
    component: DesempenhoReadComponent
  },
  {
    path: "desempenhos/update/:id",
    component: DesempenhoUpdateComponent
  },
  {
    path: "desempenhos/delete/:id",
    component: DesempenhoDeleteComponent
  },
  {
    path: "funcionarios/funcionario-desempenho/:id",
    component: FuncionarioDesempenhoComponent
  },
  {
    path: "funcionarios/funcionario-dados/:id",
    component: FuncionarioDadosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

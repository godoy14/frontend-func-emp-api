import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select'

import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './views/home/home.component';
import { FuncionarioCrudComponent } from './views/funcionario-crud/funcionario-crud.component';
import { CargoCrugComponent } from './views/cargo-crug/cargo-crug.component';
import { FuncionarioReadComponent } from './components/funcionario/funcionario-read/funcionario-read.component';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
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
import { FuncionarioDesempenhoComponent } from './components/funcionario/funcionario-desempenho/funcionario-desempenho.component';
import { FuncionarioDadosComponent } from './components/funcionario/funcionario-dados/funcionario-dados.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    FuncionarioCrudComponent,
    CargoCrugComponent,
    FuncionarioReadComponent,
    FuncionarioCreateComponent,
    FuncionarioUpdateComponent,
    FuncionarioDeleteComponent,
    CargoCreateComponent,
    CargoReadComponent,
    CargoUpdateComponent,
    CargoDeleteComponent,
    DesempenhoCreateComponent,
    DesempenhoReadComponent,
    DesempenhoUpdateComponent,
    DesempenhoDeleteComponent,
    DesempenhoCrudComponent,
    FuncionarioDesempenhoComponent,
    FuncionarioDadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

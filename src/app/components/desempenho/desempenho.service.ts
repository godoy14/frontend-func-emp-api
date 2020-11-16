import { map, catchError } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { Desempenho } from './desempenho.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DesempenhoService {

  baseUrl = "https://func-empresa-api.herokuapp.com/desempenhos"

  constructor(
    private snackBar:MatSnackBar,
    private http:HttpClient) { }

    create(desempenho:Desempenho):Observable<Desempenho> {
      return this.http.post<Desempenho>(this.baseUrl, desempenho).pipe(
        map(obj => obj), catchError(e => this.errorHandler(e))
      );
    }

    read(): Observable<Desempenho[]> {
      return this.http.get<Desempenho[]>(this.baseUrl).pipe(
        map(obj => obj), catchError(e => this.errorHandler(e))
      );
    }

    readById(id:number): Observable<Desempenho> {
      const url = `${this.baseUrl}/${id}`
      return this.http.get<Desempenho>(url).pipe(
        map(obj => obj), catchError(e => this.errorHandler(e))
      );
    }

    readByFuncionario(id:number): Observable<Desempenho[]> {
      const url = "por-funcionario?funcionarioId"
      const novaUrl = `${this.baseUrl}/${url}=${id}`
      return this.http.get<Desempenho[]>(novaUrl).pipe(
        map(obj => obj), catchError(e => this.errorHandler(e))
      );
    }

    update(desempenho:Desempenho): Observable<Desempenho> {
      const url = `${this.baseUrl}/${desempenho.id}`
      return this.http.put<Desempenho>(url, desempenho).pipe(
        map(obj => obj), catchError(e => this.errorHandler(e))
      );
    }

    delete(id:number): Observable<Desempenho> {
      const url = `${this.baseUrl}/${id}`
      return this.http.delete<Desempenho>(url).pipe(
        map(obj => obj), catchError(e => this.errorHandler(e))
      );
    }

    showMessage(msg: string, isError: boolean = false): void {
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: "top",
        panelClass: isError ? ['msg-error'] : ['msg-success']
      })
    }

    errorHandler(e: any): Observable<any> {
      this.showMessage('Ocorreu um erro', true);
      return EMPTY;
    }
}

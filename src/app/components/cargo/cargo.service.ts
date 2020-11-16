import { Cargo } from './cargo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  baseUrl = "https://func-empresa-api.herokuapp.com/cargos"

  constructor(
    private snackBar:MatSnackBar,
    private http:HttpClient) { }

    create(cargo:Cargo): Observable<Cargo> {
      return this.http.post<Cargo>(this.baseUrl, cargo).pipe(
        map(obj => obj), catchError(e => this.errorHandler(e))
      );
    }

    read(): Observable<Cargo[]> {
      return this.http.get<Cargo[]>(this.baseUrl).pipe(
        map(obj => obj), catchError(e => this.errorHandler(e))
      );
    }

    readById(id:number): Observable<Cargo> {
      const url = `${this.baseUrl}/${id}`
      return this.http.get<Cargo>(url).pipe(
        map(obj => obj), catchError(e => this.errorHandler(e))
      );
    }

    update(cargo:Cargo): Observable<Cargo> {
      const url = `${this.baseUrl}/${cargo.id}`
      return this.http.put<Cargo>(url, cargo).pipe(
        map(obj => obj), catchError(e => this.errorHandler(e))
      );
    }

    delete(id:number): Observable<Cargo> {
      const url = `${this.baseUrl}/${id}`
      return this.http.delete<Cargo>(url).pipe(
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

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Calificacion } from './calificacion';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  private apiURL = "http://localhost:8000/api/calificacion/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Calificacion[]> {
   return this.httpClient.get<Calificacion[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(calificacion): Observable<Calificacion> {
   return this.httpClient.post<Calificacion>(this.apiURL, JSON.stringify(calificacion), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id): Observable<Calificacion> {
   return this.httpClient.get<Calificacion>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id, calificacion): Observable<Calificacion> {
   return this.httpClient.put<Calificacion>(this.apiURL + id, JSON.stringify(calificacion), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id){
   return this.httpClient.delete<Calificacion>(this.apiURL + id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 errorHandler(error) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }

}

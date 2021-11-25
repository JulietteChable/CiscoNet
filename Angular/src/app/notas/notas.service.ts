import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Notas } from './notas';
@Injectable({
  providedIn: 'root'
})

export class NotasService {

  private apiURL = "http://localhost:8000/api/notas/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Notas[]> {
   return this.httpClient.get<Notas[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(notas): Observable<Notas> {
   return this.httpClient.post<Notas>(this.apiURL, JSON.stringify(notas), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id): Observable<Notas> {
   return this.httpClient.get<Notas>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id, notas): Observable<Notas> {
   return this.httpClient.put<Notas>(this.apiURL + id, JSON.stringify(notas), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id){
   return this.httpClient.delete<Notas>(this.apiURL + id, this.httpOptions)
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

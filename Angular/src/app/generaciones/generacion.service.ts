import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Generacion  } from './generacion';

@Injectable({
  providedIn: 'root'
})
export class GeneracionService {

  private apiURL = "http://localhost:8000/api/generacion/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Generacion[]> {
   return this.httpClient.get<Generacion[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(generacion): Observable<Generacion> {
   return this.httpClient.post<Generacion>(this.apiURL, JSON.stringify(generacion), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id): Observable<Generacion> {
   return this.httpClient.get<Generacion>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id, generacion): Observable<Generacion> {
   return this.httpClient.put<Generacion>(this.apiURL + id, JSON.stringify(generacion), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id){
   return this.httpClient.delete<Generacion>(this.apiURL + id, this.httpOptions)
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


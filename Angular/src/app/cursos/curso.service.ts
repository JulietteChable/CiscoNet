import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private apiURL = "http://localhost:8000/api/curso/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Curso[]> {
   return this.httpClient.get<Curso[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(curso): Observable<Curso> {
   return this.httpClient.post<Curso>(this.apiURL, JSON.stringify(curso), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id): Observable<Curso> {
   return this.httpClient.get<Curso>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id, curso): Observable<Curso> {
   return this.httpClient.put<Curso>(this.apiURL + id, JSON.stringify(curso), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id){
   return this.httpClient.delete<Curso>(this.apiURL + id, this.httpOptions)
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


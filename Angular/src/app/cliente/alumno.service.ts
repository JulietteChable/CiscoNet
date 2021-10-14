import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Alumno } from './alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private apiURL = "http://localhost:8000/api/alumno/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Alumno[]> {
   return this.httpClient.get<Alumno[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(alumno): Observable<Alumno> {
   return this.httpClient.post<Alumno>(this.apiURL, JSON.stringify(alumno), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id): Observable<Alumno> {
   return this.httpClient.get<Alumno>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id, alumno): Observable<Alumno> {
   return this.httpClient.put<Alumno>(this.apiURL + id, JSON.stringify(alumno), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id){
   return this.httpClient.delete<Alumno>(this.apiURL + id, this.httpOptions)
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


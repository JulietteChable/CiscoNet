import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Certificado} from './certificado';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  private apiURL = "http://localhost:8000/api/certificado/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Certificado[]> {
   return this.httpClient.get<Certificado[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(certificado): Observable<Certificado> {
   return this.httpClient.post<Certificado>(this.apiURL, JSON.stringify(certificado), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id): Observable<Certificado> {
   return this.httpClient.get<Certificado>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id, certificado): Observable<Certificado> {
   return this.httpClient.put<Certificado>(this.apiURL + id, JSON.stringify(certificado), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id){
   return this.httpClient.delete<Certificado>(this.apiURL + id, this.httpOptions)
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
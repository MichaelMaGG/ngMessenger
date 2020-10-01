import { Injectable } from '@angular/core';
import { Result } from './result';
import { ResponseVO } from '../responseVO/responseVO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RESULTS } from './mock-result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private resultsUrl = 'http://localhost:8090/result';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  // httpString  = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  // };

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getResults(): Observable<Result[]> {
    return this.http.get<Result[]>(this.resultsUrl, this.httpOptions)
      .pipe(
        catchError(this.handleError<Result[]>('getHeroes', []))
      );
  }

  // getHello(): void {
  //   console.log(this.http.get<String>('http://localhost:8090/hello'));
  // }

  getMockResults(): Observable<Result[]> {
    return of(RESULTS);
  }

  // getResponseVO(): Observable<Result> {
  //   return this.http.get<Result>(this.resultsUrl)
  //     .pipe(
  //       catchError(this.handleError<Result[]>('getResponse', []))
  //     );
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log('${operation} failed: ${error.message}');

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

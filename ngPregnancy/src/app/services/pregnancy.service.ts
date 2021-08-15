import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pregnancy } from '../models/pregnancy';


@Injectable({
  providedIn: 'root'
})
export class PregnancyService {

private pregnancies : Pregnancy[] = [];

getHttpOptions() {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-type' : 'application/json'
    }),
  };
  return httpOptions;
}

public showById(id : any) : Observable<Pregnancy> {
  return this.http.get<Pregnancy>(this.url + "/" + id, this.getHttpOptions()).pipe(
    catchError((err : any) => {
      console.error('PregnancyService.show(): error getting pregnancy id ' + id);
      return throwError(err);
    })
  );
}

public create(pregnancy : Pregnancy) {
  return this.http.post<Pregnancy>(this.url, pregnancy, this.getHttpOptions()).pipe(
    catchError((err : any) => {
      console.error('PregnancyService.create(): error creating pregnancy ');
      return throwError(err);
    })
  );
}

public update(pregnancy : Pregnancy) {
  return this.http.put<Pregnancy>(this.url, pregnancy, this.getHttpOptions()).pipe(
    catchError((err : any) => {
      console.error('PregnancyService.update(): error updating pregnancy id ' + pregnancy.id);
      return throwError(err);
    })
  );
}

public destroy(id : number) {
  return this.http.delete<Pregnancy>(this.url + '/' + id, this.getHttpOptions()).pipe(
    catchError((err : any) => {
      console.error('PregnancyService.destroy(): error deleting pregnancy id ' + id);
      return throwError(err);
    })
  );
}


baseUrl = 'http://localhost:8084/'
url = this.baseUrl + 'api/pregnancies';

  constructor(
    private http: HttpClient
  ) {  }

index(): Observable<Pregnancy[]>{
  return this.http.get<Pregnancy[]>(this.url).pipe(
  catchError((err: any) => {
    console.error('PregnancyService.index(): error retrieving pregnancy list ');
    return throwError(err);
  })
  );
}

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { GetBody } from '../Models/GetBody';

@Injectable({
  providedIn: 'root'
})
export class DirectoryContentService {

  endpoint = '/api/directorycontent/';
  httpOptions = {
  headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getElements(path: string): Observable<{}> {
    const getBodyJSON: string = JSON.stringify(new GetBody(path));
    console.log('getBodyJSON: ', getBodyJSON);
    const headerDict = {
      'Content-Type': 'application/json'
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };

    return this.http.put(this.endpoint + 'elements', getBodyJSON, requestOptions).pipe(
      map(this.extractData));
  }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }
}

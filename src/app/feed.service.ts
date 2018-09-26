import { Injectable } from '@angular/core';
import { Podcast } from './models/podcast';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    private http: HttpClient
  ) { }

  getFeed(url: string) : Observable<string> {

    let corsReadyURL = `https://cors-anywhere.herokuapp.com/${url}`;
    return this.http.get(corsReadyURL, { responseType: 'text' });

  }

  
}

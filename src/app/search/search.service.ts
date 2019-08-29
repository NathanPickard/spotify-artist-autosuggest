import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  clientID: string = '3efebec10bbb43209574d2cc4e07eac9';
  baseUrl: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client id=' + this.clientID + '&q=';

  constructor(private httpClient: HttpClient) { }

  search(queryString: string) {
    let _URL = this.baseUrl + queryString;
    return this.httpClient.get(_URL);
  }

  getHeaders() {
    return new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${environment.spotifyToken}` })
  }
}

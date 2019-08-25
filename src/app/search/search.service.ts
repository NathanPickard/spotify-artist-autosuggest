import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  clientID: string = '';
  baseUrl: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client id=' + this.clientID + '&q=';

  constructor(private httpClient: HttpClient) { }

  search(queryString: string) {
    let _URL = this.baseUrl + queryString;
    return this.httpClient.get(_URL);
  }
}

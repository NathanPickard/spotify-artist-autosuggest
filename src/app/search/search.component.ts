import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'

import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results: any[] = [];
  // response: any;
  queryField: FormControl = new FormControl();

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.queryField.valueChanges
      .pipe(
        debounceTime(2000),
        distinctUntilChanged(),
        switchMap((query) => this.searchService.search(query)))
      .subscribe(result => {
        if (result.status === 400) {
          return;
        }
        else {
          this.results = result.json().artists.items;
        }
      });
    // this.searchService.search(queryField)
    //   .subscribe(response => this.results = this.response.json().artists.items));
  }

}

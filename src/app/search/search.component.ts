import { Component, OnInit } from '@angular/core';
import { Person, SearchService } from '../shared/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query!: string; // query: string = ''; will also work
  searchResults: any;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.searchService.search(this.query).subscribe(
      (data: Person[]) => { this.searchResults = data; },
      error => console.log(error)
    );
  }
}

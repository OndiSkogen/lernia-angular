import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private searchTerm = '';

  searchStations(): void {
    this.apiService.searchStations(this.searchTerm);
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

}

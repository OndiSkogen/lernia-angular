import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private searchTerm = '';
  private StopLocation: any[];

  getStations(): void {
    this.http.get<any>('api/search/' + this.searchTerm).subscribe(data => {
      console.log(data);
      this.StopLocation = data.StopLocation;
    });
  }
  // getStationsLocally(): void {
  //   this.http.get('api/searchlocal').subscribe(data => {
  //     console.log(data);
  //     this.StopLocation = data;
  //   });
  // }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}

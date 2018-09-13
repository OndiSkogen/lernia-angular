import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  StopLocation;

  @Output() change: EventEmitter<any> = new EventEmitter();

  searchStations(searchTerm: string): void {
    this.http.get<any>('api/search/' + searchTerm).subscribe(data => {
      console.log(data);
      this.StopLocation = data.StopLocation;
      this.change.emit(this.StopLocation);
    });
  }

  constructor(private http: HttpClient) { }
}

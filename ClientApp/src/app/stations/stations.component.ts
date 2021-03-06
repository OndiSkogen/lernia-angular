import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  private stations;
  private stop;

  searchStops(): void {
    this.apiService.searchStops(this.stop);
  }

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.change.subscribe(StopLocation => {
      this.stations = StopLocation;
    });
  }

}

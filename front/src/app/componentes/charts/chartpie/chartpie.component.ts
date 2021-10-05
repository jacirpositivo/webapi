import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chartpie',
  templateUrl: './chartpie.component.html',
  styleUrls: ['./chartpie.component.css']
})
export class ChartpieComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Chart 01'
    },
    series: [{
      data: [1, 2, 3],
      type: 'pie'
    }]
  }; // required
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) { } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false

  constructor() { }

  ngOnInit(): void {
  }

}

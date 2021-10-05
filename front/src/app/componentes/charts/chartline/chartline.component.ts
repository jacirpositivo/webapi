import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-chartline',
  templateUrl: './chartline.component.html',
  styleUrls: ['./chartline.component.css']
})
export class ChartlineComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Chart Line'
    },
    series: [{
      data: [1, 2, 3, 8, 20],
      type: 'line'
    }, {
      data: [16, 10, 30, 20, 5],
      type: 'line'
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

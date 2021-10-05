import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-chartbar',
  templateUrl: './chartbar.component.html',
  styleUrls: ['./chartbar.component.css']
})
export class ChartbarComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {
    exporting: {
      chartOptions: { // specific options for the exported image
        plotOptions: {
          series: {
            dataLabels: {
              enabled: true
            }
          }
        }
      },
      fallbackToExportServer: false
    },
    title: {
      text: 'Chart br'
    },
    series: [{
      data: [1, 2, 3, 8, 20],
      type: 'bar',
    }, {
      data: [16, 10, 5, 20, 5],
      type: 'bar'
    }, {
      data: [6, 6, 8, 1, 30],
      type: 'bar'
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

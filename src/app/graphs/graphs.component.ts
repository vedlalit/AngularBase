
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { BPprocess } from '../shared/bpprocess.model';
// import {Processnames} from '../shared/processnames.model'
import {Chart} from 'chart.js'
import {Processdetails} from '../shared/processdetails.model';
import { Observable } from 'rxjs'; 
import {MatSort,MatPaginator} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import { Processnames } from '../shared/processnames.model';
import { DataSource } from '@angular/cdk/table';
import {ChartsComponent} from "src/app/charts/charts.component"

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {
  
  chart = [];
  LineChart=[];
    // date = []
  proname :  string
  duration : string 
  // strIntoObj: GraphsComponent[];
  // @Input() data: Processdetails
 
  constructor(private service: EmployeeService) { }
data : Processdetails
  ngOnInit() {
    // this.data = this.component.data
    this.data = this.service.getProcData()
    // console.log(this.data)
    // let pname = this.data.map(res=>res.ProcessName)
    //  this.date = this.data.Date

    // console.log(this.date)

    // let duration = this.data.map(res=>res.Duration)

   
    //  this.proname = this.data.ProcessName;
      // let date = this.data.Date;
    //   this.duration = this.data.Duration; 

    //   let str: string = this.data.ProcessName;
    // this.strIntoObj = JSON.parse(str);
    // console.log(this.strIntoObj);
       //  let pname = this.data.ProcessName;
    //  let date = this.data.Date;
    // //  let duration = this.data.Duration;
    // // console.log(this.data.Date)

    //  let processDates : Array<Processdetails> = []

    //  let processDates: any = [];
    //  this.data.Date.forEach(res => {
    //   //  console.log(this.data.Date)
    //   //  let jsdate = new Date (res)
    //    processDates.push()
       
    //  });
    //   console.log(processDates)
     

    // this.chart = new Chart('canvas',{
    //   type:'line',
    //   data:{
    //     labels: processDates,
    //     datasets:[
    //       {
    //       data:pname,
    //       bordercolor:'#3cba9f',
    //       fill:false
    //     },
    //     {
    //       data:duration,
    //       bordercolor:'#ffcc00',
    //       fill:false
    //     },
    //   ]
    //   },
    //   options:{
    //     legend:{
    //       display: false
    //     },
    //     scales: {
    //       xAxes: [{
    //         display: true
    //       }],
    //       yAxes: [{
    //         display: true
    //       }]
    //     }
    //   }
    // })
     // Line chart:
this.LineChart = new Chart('lineChart', {
  type: 'line',
data: {
 labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
 datasets: [{
     label: 'Number of Items Sold in Months',
     data: [9,7 , 3, 5, 2, 10,15,16,19,3,1,9],
     fill:false,
     lineTension:0.2,
     borderColor:"red",
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"Line Chart",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});
// this.chart = new Chart('chart',{
//   type:'line',
//   data:{
//     labels:this.data.ProcessName,
//     datasets:[{
//       label:'Process ran regarding time',
//       data:processDates,
//       fill:false,
//       lineTension:0.2,
//       borderColor:"red",
//       borderWidth:1
//     }]
//   },
//   options: {
//     title:{
//         text:"Line Chart",
//         display:true
//     },
//     scales: {
//         yAxes: [{
//            display:true
//         }]
//     }
//    }

// });
  }
  


  //get procdata():Processdetails{
    // return this.service.shared;
  //}
  //set procdata(data : Processdetails){
    //data = this.service.shared
  //}


  


}

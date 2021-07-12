
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { BPprocess } from '../shared/bpprocess.model';
// import {Processnames} from '../shared/processnames.model'
import { Processdetails } from '../shared/processdetails.model';
import { Observable } from 'rxjs';
import { MatSort, MatPaginator } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { Processnames } from '../shared/processnames.model';
import { DataSource } from '@angular/cdk/table';
import { Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from "@angular/material";
import { BlueprismComponent } from 'src/app/blueprism/blueprism.component'
import { GraphsComponent } from '../graphs/graphs.component';
// import {BPprocess} from '../shared/bpprocess.model'

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']

})

export class ChartsComponent implements OnInit {

  // get procdata():Processdetails{
  //   return this.service.shared;
  // }
  // set procdata(data : Processdetails){
  //   this.service.shared = data;
  // }

  myData: Processnames
  data: Processdetails
  constructor(private service: EmployeeService, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {

    this.service.getProcessnames()
      .subscribe((result: any) => { this.myData = result })
     

    

  }
  getProcessDetails(proc: any) {
    this.service.getProcessDetails(proc).subscribe((res: any) => { this.data = res });
    setTimeout(()=>{this.service.setProcData(this.data)},100);
    setTimeout(()=>{  let dialogRef = this.dialog.open(GraphsComponent, { maxHeight: '800px', width: '1000px',panelClass: 'confirm-dialog-container' });},100);
    }


  //  openProcessModal() { 
  //    let dialogRef = this.dialog.open(GraphsComponent, { maxHeight: '1000px', panelClass: 'confirm-dialog-container' });
  //  }
  
//   setData(){
//   this.service.setProcData(this.data)
//  }


}

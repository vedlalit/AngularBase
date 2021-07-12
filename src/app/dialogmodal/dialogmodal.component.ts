import { Component, OnInit,Inject } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import {MAT_DIALOG_DATA,MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-dialogmodal',
  templateUrl: './dialogmodal.component.html',
  styleUrls: ['./dialogmodal.component.css']
})
export class DialogmodalComponent implements OnInit {
Username : any;
 

  constructor(private empservice : EmployeeService,public dialogRef: MatDialogRef<DialogmodalComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    // this.Username = this.data.username;
  }

}

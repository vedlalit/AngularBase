import { Component, OnInit,Inject } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import {MAT_DIALOG_DATA,MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user :any;

  constructor(private service : EmployeeService,public dialogRef: MatDialogRef<ProfileComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.service.getUserClaims().subscribe((data : any) => {
      this.user = data;
    } )
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatButton, MatSelect, MatFormField } from '@angular/material';
import { EmployeeService } from '../shared/employee.service';
import { Users } from '../shared/users.model';
import { MatDialogConfig, MatDialog } from "@angular/material";
import { ProfileComponent } from 'src/app/profile/profile.component'
import { BlueprismComponent } from 'src/app/blueprism/blueprism.component'
import { ChartsComponent } from 'src/app/charts/charts.component'


interface Profile {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  profiles: Profile[] = [
    { value: 'steak-0', viewValue: 'Profile' },
    { value: 'pizza-1', viewValue: 'Change Password' }

  ];

  user: any;
  processnames: any;

  constructor(private router: Router, private service: EmployeeService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.service.getUserClaims().subscribe((data: any) => {
      this.user = data;
    })
    this.service.getUserClaims().subscribe((data: any) => {
      this.processnames = data;
    })

    // this.service.getUserClaims();
  }
  getusers() {
    this.service.getDimensionsByFilter();
  }
  Logout() {
    localStorage.removeItem('Token');
    this.router.navigate(['/login']);

  }

  openModal() {
    let dialogRef = this.dialog.open(ProfileComponent, { width: '600px', panelClass: 'confirm-dialog-container' });
  }
  openProcessModal() {
    let dialogRef = this.dialog.open(BlueprismComponent, { maxHeight: '1000px', panelClass: 'confirm-dialog-container' });
  }
  openChartsModal() {
    this.router.navigate(['/charts']);
  }
  // open(){
  //   this.router.navigate(['/processname']);
  // }

}

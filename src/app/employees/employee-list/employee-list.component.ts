import { Component, OnInit,Injectable  } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import { ToastrService } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
// import {MatTableDataSource} from '@angular/material/table';
 //import { faUserMinus } from '@fortawesome/free-solid-svg-icons';
// import { DataTablesModule } from 'angular-datatables';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Inject, Output, EventEmitter, Optional } from '@angular/core';
import{MatDialogConfig,MatDialog} from "@angular/material";

import { EmployeeComponent } from '../employee/employee.component';
import { DialogmodalComponent } from 'src/app/dialogmodal/dialogmodal.component';
import { SignInComponent } from 'src/app/sign-in/sign-in.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
@Injectable()
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service: EmployeeService,
    private toastr: ToastrService , private dialog : MatDialog) { }
    // title = 'angulardatatables';
    // dtOptions: DataTables.Settings = {};
  ngOnInit() {
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 5,
    //   processing: true
    // };
    this.service.refreshList();
  }

  populateForm(emp: Employee) {
    this.service.formData = Object.assign(emp);
  }


  onDelete(id: number) {
    // if (confirm('Are you sure to delete this record?')) {
      this.service.deleteEmployee(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'EMP. Register');
      });
    //}
  }
OpenModal(id : number, name : any){
  // const dialogConfig = new MatDialogConfig();
  //   dialogConfig.data = name;
let dialogRef = this.dialog.open(DialogmodalComponent,{ width: '600px',
panelClass: 'confirm-dialog-container',
data:{
   username : name
}

});
dialogRef.afterClosed().subscribe(confirmresult=>{  
  // console.log(confirmresult);  
  if(confirmresult){            //if dialog result is yes, delete post  
    this.onDelete(id);  
    // console.log("Delete confirm is approved by user.");  
  }  
  else{                        //if dialog result is no, DO NOT delete post  
    console.log("Delete confirm is cancelled by user.");  
  }  
})      
}

OpenModalList(name: any, EmpCode: any, Mobile : any, Position: any)
{
    let dialogRef = this.dialog.open(DialogmodalComponent);
   
}



}
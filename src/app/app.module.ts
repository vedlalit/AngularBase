import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{MatDialogModule}from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import{MatButtonModule} from '@angular/material';
import{MatSelectModule,MatMenuModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule,MatPaginatorModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';






// import {DataTablesModule} from 'angular-datatables';
// import {FormControl,FormGroup} from '@angular/forms';
// import { CommonModule } from '@angular/common'; 


import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './Employees/employee/employee.component';
import { EmployeeListComponent } from './Employees/employee-list/employee-list.component';
import { EmployeeService } from './shared/employee.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignInComponent } from './sign-in/sign-in.component';
import {RouterModule,Routes} from '@angular/router';
import{appRoutes} from './routes'
import { AuthGuard } from './auth/auth.guard';
import { DialogmodalComponent } from './dialogmodal/dialogmodal.component';
import { ProfileComponent } from './profile/profile.component';
import { BlueprismComponent } from './blueprism/blueprism.component';
import { ChartsComponent } from './charts/charts.component';
import { GraphsComponent } from './graphs/graphs.component';
import {AgGridModule} from 'ag-grid-angular';




@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent, 
    EmployeeListComponent, SignInComponent, DialogmodalComponent, ProfileComponent, BlueprismComponent, ChartsComponent, GraphsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    AgGridModule.withComponents([])
    
    
  
 
    
   
  ],
  providers: [EmployeeService,AuthGuard],
  bootstrap: [AppComponent],
  entryComponents:[EmployeeComponent]
})
export class AppModule { }

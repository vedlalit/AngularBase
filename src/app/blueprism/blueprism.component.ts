import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Processnames } from '../shared/processnames.model';
import { Observable } from 'rxjs'; 
import {MatSort,MatPaginator} from '@angular/material';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-blueprism',
  templateUrl: './blueprism.component.html',
  styleUrls: ['./blueprism.component.css']
})

export class BlueprismComponent implements OnInit {
 

  ProcessName: string;
  // processnames :any;
  procnames: MatTableDataSource<any>;
  searchKey : string;

  allprocess: Observable<Processnames[]>;
  
 
  displayedColumns: string[] = ['ProcessNames'];
  @ViewChild(MatSort,{static:true}) sort: MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
 
  constructor(private service : EmployeeService) { }
 
  ngOnInit() {
    // this.service.getProcessnames().subscribe((data : any) => {
    //   this.processnames = data;
    
    // })
    this.service.getProcessnames().subscribe((data : any) => {
      this.procnames = new MatTableDataSource(data);
      this.procnames.sort = this.sort;
      this.procnames.paginator = this.paginator;
    
    })

    // this.dataSource.sort = this.sort;
    


  }
  loadAllProcess() {
    this.allprocess = this.service.getAllProcess(); 
     }
  onSelect(proc : any)
  {
    this.service.getProcessDetails(proc);
  }

  onSearchClear(){
    this.searchKey="";
    this.applyFilter();
  }
  applyFilter(){
    this.procnames.filter = this.searchKey.trim().toLowerCase();
  }

  getProcessDetails(processname : any){
     this.service.getProcessDetails(processname)
   }

  }



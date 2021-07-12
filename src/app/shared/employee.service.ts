import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import {Users} from './users.model';
import { HttpClient,HttpHeaders,HttpParams } from "@angular/common/http";
import { BPprocess } from './bpprocess.model';
import { Processnames } from './processnames.model';
import { Observable } from 'rxjs'; 
import { Processdetails } from './processdetails.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  shared: any;
  formData  : Employee; //Used to fill with data to update, put or post user
  list : Employee[]; //Available employee list 
  userList : Users[];
  processlist: BPprocess[];
  plist : Processnames[];
  readonly rootURL ="https://localhost:44312/"

  constructor(private http : HttpClient) { }

  setProcData(val){
this.shared = val;

  }
  getProcData(){
    return this.shared
  }

  postEmployee(formData : Employee){
   return this.http.post(this.rootURL+'api/Employees/PostEmployee/',formData);
    
  }

  refreshList(){
    this.http.get(this.rootURL+'api/Employees/GetEmployees')
    .toPromise().then(res => this.list = res as Employee[]);
  }

  putEmployee(formData : Employee){
    return this.http.put(this.rootURL+'api/Employees/PutEmployee/'+formData.EmployeeID,formData);
     
   }

   deleteEmployee(id : number){
    return this.http.delete(this.rootURL+'api/Employees/DeleteEmployee/'+id);
   }

   userAuthentication(username,password)
   {
     var data ="username="+username+"&password="+password+"&grant_type=password";
     var reqHeader = new HttpHeaders({'Content-type':'application/json;charset=UTF-8'});
     return this.http.post(this.rootURL+'token',data,{headers:reqHeader});
   }


  getUserClaims(){
    var token = localStorage.getItem('Token');
    var reqHeader = new HttpHeaders({'Content-type':'application/json','Accept':'application/json','Authorization':'Bearer '+token});
   return  this.http.get(this.rootURL+'api/GetUserClaims',{headers:reqHeader});
  //  .toPromise().then(res => this.userList = res as Users[]);
  
      }
       getDimensionsByFilter(){
        return this.userList.values;
      }

      getProcessnames(){
        return this.http.get(this.rootURL+'api/processnames')
      }

      getProcessDetails(proc : any){
        // var parameter = new HttpParams(pname)
        return this.http.get(this.rootURL+'api/processdetails'+'?'+'proc'+'='+ proc)
          //  .toPromise().then(res => this.processlist = res as BPprocess[]);
      }
      getAllProcess(): Observable<Processnames[]> {  
        return this.http.get<Processnames[]>(this.rootURL+'api/processnames');  
      }  
      
    //   getUserClaims(){
    //     return this.http.get(this.rootURL+'api/GetUserClaims')
    // // .toPromise().then(res => this.userList = res as Users[]);
    //   }

   showEmployee(id : number) 
   {
      this.http.get(this.rootURL+'api/Employees/PutEmployee'+id).toPromise().then(res => this.formData = res as Employee);
   }
  //  postData(data): any
  //   {      

  //   const body = new HttpParams()          
  //   .set('grant_type', data.grant_type)          
  //   .set('username', data.username)    
  //   .set('password', data.password)    
  //   return this.http.post('http://localhost:44391/token', body.toString(), {observe: 'response',    
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },    
  //   });    
  // }    
   
}
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms'; 
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { format } from 'url';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
 


  isLoginError : boolean = false;
  constructor(private service: EmployeeService,private router : Router,private toastr: ToastrService) { }

  ngOnInit() {
    
    
  }
  OnSubmit(username,password,form)  
  {  
    
    this.service.userAuthentication(username,password).subscribe((data : any) =>{
      localStorage.setItem('Token',data.access_token);
      this.router.navigate(['/home']);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
      this.toastr.error('Please check Username & Password','Login Rejected');
    form.resetForm()
      
    });   
      // this.service.postData(this.form.value)  
      //                .subscribe(res => {    
      //                  if (res.status === 200) { 
      //                   this.successmsg = 'token - ' + res.body.access_token;localStorage.setItem('access_token', res.body.access_token);  
      //                   } else {  
      //                     this.errmsg = res.status + ' - ' + res.statusText;  
      //                     }  
      //                    },  
      //                  err => {                                 
      //                   if (err.status === 401  ) {  
      //                     this.errmsg = 'Invalid username or password.';  
      //                      }   
      //                     else if (err.status === 400  ) {  
      //                      this.errmsg = 'Invalid username or password.';  
      //                     }   
      //                     else {  
      //                     this.errmsg ="Invalid username or password";  
      //                      }  
      //                   });  
        }   
 
  

}

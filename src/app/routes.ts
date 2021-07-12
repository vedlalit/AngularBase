import { RouterModule,Routes } from '@angular/router'
import { EmployeesComponent } from './employees/employees.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import{DialogmodalComponent} from 'src/app/dialogmodal/dialogmodal.component';
import{ProfileComponent} from 'src/app/profile/profile.component';
import{BlueprismComponent} from 'src/app/blueprism/blueprism.component';
import{ChartsComponent}from 'src/app/charts/charts.component';
import { GraphsComponent } from './graphs/graphs.component';
// import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    { path: 'home', component: EmployeesComponent,canActivate:[AuthGuard] },
   
    {
        path: 'login', component: SignInComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {   
        path:'dialog',component:DialogmodalComponent,
    
    },
    {
        path:'profile',component: ProfileComponent,

    },
    {
        path:'processname',component: BlueprismComponent,
    },
    {
        path:'charts',component:ChartsComponent
    },
    {
        path:'graphs',component:GraphsComponent
    },
    { path : '', redirectTo:'/login', pathMatch : 'full'}
    
];
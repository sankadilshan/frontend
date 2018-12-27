import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxTimePickerModule } from 'igniteui-angular';




import { AppComponent } from './app.component';
import { NavbarComponent } from './dir/navbar/navbar.component';
import { LoginComponent } from './dir/login/login.component';
import { RegisterComponent } from './dir/register/register.component';
import { UsersregisterdComponent } from './dir/usersregisterd/usersregisterd.component';
import { HomeComponent } from './dir/home/home.component';
import { UserService } from './service/user.service';
import { DoctorRoleComponent } from './dir/doctor-role/doctor-role.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register',      component: RegisterComponent },
  {path: 'registerduser', component:UsersregisterdComponent},
  {path:'home',component:HomeComponent},
  {path:'doctor',component:DoctorRoleComponent},
  {path:'**',redirectTo:'/login', pathMatch:'full'},
  {path:'',redirectTo:'/login', pathMatch:'full'}]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UsersregisterdComponent,
    HomeComponent,
    DoctorRoleComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IgxTimePickerModule,
    

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

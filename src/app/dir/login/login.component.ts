import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  user:User=new User();
  logeduser:User=new User();
  constructor(private router:Router ,private userService:UserService) { }
    
  loginUser():void{
    this.userService.loginUser(this.user).subscribe(data =>{
      if(data != null){
        this.logeduser=data;
        
        alert("login success....!!!");
       // console.log(data);
       this.userService.editName(this.logeduser.username);
        this.router.navigate(['/home']);
       
      }
      else {console.log("error");
     alert("invalid username or password");}
    });
    }
    
  ngOnInit() {
    this.userService.loginUser(this.user).subscribe(data =>{
     
  })
    }
}

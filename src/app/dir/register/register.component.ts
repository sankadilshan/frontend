import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';
import { RegisterformService } from 'src/app/service/registerform.service';
import { Parent } from 'src/app/model/parent';
//import { AddInfo } from 'src/app/model/additionalInfo';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
     user:User=new User();
     //parent:Parent=new Parent();
     //additional:AddInfo=new AddInfo();
     items:any;
     name:string;
  constructor(private router: Router , private userService:UserService, private registerService:RegisterformService) { }
    
  createUser():void{
    console.log(this.user);
  this.userService.create(this.user)
       .subscribe
       (data => {
         alert("user register sussessfulL")
        this.router.navigate(['/login']);
      
       }); 
      }
  
  ngOnInit() {
    this.userService.cast.subscribe(name=>{
      if(name !="null")
         this.name=name;
     /*  else
     this.router.navigate(["/login"])*/});

   this.registerService.getparent().subscribe(
    res=>{
      console.log(res);
      this.items=res;});
      
    }
   
  }



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';
import { RegisterformService } from 'src/app/service/registerform.service';

@Component({
  selector: 'app-usersregisterd',
  templateUrl: './usersregisterd.component.html',
  styleUrls: ['./usersregisterd.component.css']
})
export class UsersregisterdComponent implements OnInit {
    users:User[];
    us:User=new User();
    name:string;
  constructor(private router: Router,private userService:UserService, private registerService:RegisterformService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data;
        console.log(data);
      });

    this.userService.userbyId()
      .subscribe(data =>{
       console.log(data);
      });

    this.userService.cast.subscribe(name=>{
     if(name !="null")
        this.name=name;
     else{
    //this.router.navigate(["/login"]);
    alert("first login");}
     } );

    
  }
deleteUser(user){
  this.userService.delete(user)
  .subscribe(data =>
  console.log("success fully delete" ,data))
}
logout(){
  this.router.navigate(["/login"]);
  console.log("successfully logout");
}
}

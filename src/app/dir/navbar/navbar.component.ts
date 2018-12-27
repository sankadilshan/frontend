import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
name_="Dr.jayarathne perera vvvvvvvv";
nm="sanka";
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.cast.subscribe(name=>{
      if(name !="null")
        this.name_=name;
      
     /*  else{
     this.router.navigate(["/login"])
     alert("first login");}*/
    });
  }

}

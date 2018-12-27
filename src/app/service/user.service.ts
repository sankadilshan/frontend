import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpHeaderResponse } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import { User } from '../model/user';


   
   const httpOptions={
     headers:new HttpHeaders({'Content-Type':'application/json'})
   };
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private name= new BehaviorSubject<string>('null');
  cast=this.name.asObservable();
  //user: User=new User();
    url='/api';
  headers: Headers;
  constructor(private http: HttpClient) {}

editName(newName){
  this.name.next(newName); 
}

create(user){
   return this.http.post<User>
   (this.url+"/useradd",user);
  }

delete(user){
   return this.http.delete<User>
   (this.url+"/delete",user);
  }

loginUser(user){
   return this.http.post<User>
   (this.url+"/login",user);

 }
userbyId(){
   return this.http.get<User>
   (this.url+"/0");
 }
getUsers() {
  return this.http.get<User[]>
  (this.url+"/all");
}


}


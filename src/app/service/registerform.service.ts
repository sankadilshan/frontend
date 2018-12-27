import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Child } from '../model/child';
import { Gn } from '../model/gn';
import { Phm } from '../model/phm';
import { Moh } from '../model/moh';
import { Ds } from '../model/ds';
import { Rdhs } from '../model/rdhs';
import { Area } from '../model/area';
import { Parent } from '../model/parent';
import { AddInfo } from '../model/additionalInfo'; 
const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({ 
  providedIn: 'root'
})
export class RegisterformService {
  child: Child=new Child();
  area: Area=new Area();
 parent:Parent=new Parent();
//additional:AddInfo=new AddInfo();
 private url='/api';
  constructor(private http: HttpClient) { }

 /* registrationAddinfo(additional){
    return this.http.post<AddInfo>
    (this.url+"/addinfo",additional);
  }
  registrationParent(parent:Parent):Observable<Object>{ 
    console.log(parent);
   return this.http.post<Parent>(this.url+"/addparent",parent);

  }*/ 
  
  registrationParent(parent){
         console.log(parent);
       return  this.http.post<Parent>(this.url+"/addparent",parent);
  }
 
  registrationChild( child){
    return this.http.post<Child>
    (this.url+"/childadd",child);
  }
  registrationArea(area){
      return this.http.post<Area>
      (this.url+"/addarea",area);
  }
  getGn(){
   return this.http.get<Gn[]>(this.url+"/gn");
  }
  getPhm(){
    return this.http.get<Phm[]>(this.url+"/phm");
  }
  getMoh(){
    return this.http.get<Moh[]>(this.url+"/moh");
  }
  getDs(){
    return this.http.get<Ds[]>(this.url+"/ds");
  }
  getRdhs(){
    return this.http.get<Rdhs[]>(this.url+"/rdhs");
  }
  dsAreasByRdhs(rdhsname) {    
    return this.http.get<any[]>(this.url+"/dsbyrdhs?name="+rdhsname);
  }
  mohAreasByDs(dsname){
    return this.http.get<any[]>(this.url+"/mohbyds?name="+dsname);
  }
  phmAreasByMoh(mohname){
    return this.http.get<any[]>(this.url+"/phmbymoh?name="+mohname);
  }
  gnAreasByPhm(phmname){
    return this.http.get<any[]>(this.url+"/gnbyphm?name="+phmname);
  }
  getdata(){
    return this.http.get<Child[]>(this.url+"/allchild")
  }
  getparent(){
    return this.http.get<Parent[]>(this.url+"/allparents")
  }
}

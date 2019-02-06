import { Injectable } from '@angular/core';
import { UserInfo } from './userinfo';

@Injectable({
  providedIn: 'root'
})
export class GeruserinfoService {
  
  private data : UserInfo = {};
  setData(uname,house){
    this.data.username = uname;
    this.data.housename = house;
  }
  getData(){
    return this.data;
  }

}

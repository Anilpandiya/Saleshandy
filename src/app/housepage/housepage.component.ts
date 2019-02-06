import { Component, OnInit, Input } from '@angular/core';
import { GeruserinfoService } from '../geruserinfo.service';
import { GetcharactersService } from '../getcharacters.service';
import { UserInfo } from '../userinfo';

@Component({
  selector: 'housepage',
  templateUrl: './housepage.component.html',
  styleUrls: ['./housepage.component.css']
})
export class HousepageComponent implements OnInit {
  
  userData : UserInfo;
  charactersData = [];
  
  constructor(private getUserService : GeruserinfoService, private getCharactersService : GetcharactersService) { }
  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

  ngOnInit() {
    this.userData = this.getUserService.getData();    
    console.log(this.userData); // Data from home page
    this.getCharactersService.getCharacters(this.userData.housename).subscribe(data=>this.charactersData=data);
  }
  
}

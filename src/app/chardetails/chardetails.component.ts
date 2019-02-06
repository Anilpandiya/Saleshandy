import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetcharactersService } from '../getcharacters.service';

@Component({
  selector: 'app-chardetails',
  templateUrl: './chardetails.component.html',
  styleUrls: ['./chardetails.component.css']
})
export class ChardetailsComponent implements OnInit {

  charDetails = [];
  constructor(private route : ActivatedRoute ,private getCharService : GetcharactersService ) { }

  ngOnInit() {
    let char  = this.route.snapshot.paramMap.get('char');
    this.getCharService.getCharacterDetails(char).subscribe(data=>this.charDetails=data)
  }

}

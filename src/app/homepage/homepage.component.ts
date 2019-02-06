import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { GeruserinfoService } from '../geruserinfo.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  createForm: FormGroup;

  constructor(private fb: FormBuilder, private router : Router, private getUserService : GeruserinfoService) {
    this.createForm = this.fb.group({
      uname: ['', Validators.required],
      house: ''
    });
   }
   
  join(uname, house){
      this.getUserService.setData(uname, house);
      this.router.navigate(['/house']);
   }

  ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';
import {DataSService} from '../data-s.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  constructor(public serv : DataSService) { }
  dataFinal = this.serv.dataser;
  ngOnInit() {
    console.log(this.serv.dataser);
  }
  
  
}

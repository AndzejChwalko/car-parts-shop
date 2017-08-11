import { Component, OnInit, Input } from '@angular/core';
//
//import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgClass } from '@angular/common';

import { DataService } from '../../datasharing/data.service';
import { HttpService } from '../../http/customers.service';

/* add angular2-schema-form in app.module.ts*/


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

dataServ: DataService;
httpServ: HttpService;

  constructor(data: DataService, http: HttpService) { 
  	this.dataServ = data;
  	this.httpServ = http;
  }

  ngOnInit() {
  
  }

}

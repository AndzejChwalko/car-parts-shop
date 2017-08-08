import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../datasharing/data.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


customers;
dataServ: DataService;
  constructor(data: DataService) { 
  	this.dataServ = data;
  }

  ngOnInit() {
  	this.dataServ.currentHttpGetResult.subscribe(results => this.customers = results);
  }

}

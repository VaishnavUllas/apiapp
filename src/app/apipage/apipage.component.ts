import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-apipage',
  templateUrl: './apipage.component.html',
  styleUrls: ['./apipage.component.css']
})
export class ApipageComponent implements OnInit {
  public tododata;
  constructor(private APISER:ApiserviceService) { }

  ngOnInit(): void {
  }
  showData(){
    this.APISER.getData()
      .subscribe((data)=>this.tododata=data)
  
  }
  
}

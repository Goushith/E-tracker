import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.scss']
})
export class SlidebarComponent implements OnInit {


  

  constructor(private router:Router) { }
  menuShow:boolean = false;
  ngOnInit(): void {
  }
  showMenu(){ 
    this.menuShow =! this.menuShow;                                     
  }
}

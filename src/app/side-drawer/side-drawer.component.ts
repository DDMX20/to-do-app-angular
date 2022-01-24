import { Component, OnInit } from '@angular/core';
import { Icon } from '@fortawesome/fontawesome-svg-core';
import { sideDrawerItems,sideDrawerItemsControl } from './side-drawer-constants';

@Component({
  selector: 'app-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrls: ['./side-drawer.component.css']
})
export class SideDrawerComponent implements OnInit {
  public sideDrawerItems:{title:String,icon:any}[]=[]
  public sideDrawerItemsControl:{title:String,icon:any}[]=[]

  
  constructor() { }
  ngOnChanges()	:void{
  }

  ngOnInit(): void {
    this.sideDrawerItems=sideDrawerItems
    this.sideDrawerItemsControl=sideDrawerItemsControl

  }

}

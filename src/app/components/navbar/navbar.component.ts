import { Component, OnInit } from '@angular/core';
import { TimelineMax} from 'gsap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  menuIsOpen:boolean = false;

  toggleMenu = ():void => {
    if (this.menuIsOpen) {
      this.menuIsOpen = false
      this.fromXMenu();
      return;
    }
    this.menuIsOpen = true;
    this.toXMenu();
  }

  waverMenu = ():void => {
    if (this.menuIsOpen) return;
   
    let waver = new TimelineMax();
  waver.staggerTo("#burger > rect", 0.2, {x:"20px", yoyo:true, repeat:2, ease:"ease-out"}, "-0.1")
  .staggerTo("#burger > rect", 0.2, {x:"0",ease:"ease-out"}, "-0.1")
 }  


  toXMenu = ():void => {
    let x = new TimelineMax();
    x.to("#burger > rect:nth-of-type(2)", 0.2, {scaleX:0})
    .to("#burger > rect:first-of-type", 0.2, {rotation:"32deg", y:"-10px", scaleX:"1.1", tranformOrigin: "left"})
    .to("#burger > rect:last-of-type", 0.2, {scaleX:"1.1",rotation:"-32deg", tranformOrigin: "left"})
  }
  fromXMenu = ():void => {
    let x = new TimelineMax();
    x.to("#burger > rect:first-of-type", 0.2, {rotation:"0", y:"0", scaleX:"1", tranformOrigin: "left"})
    .to("#burger > rect:last-of-type", 0.2, {scaleX:"1",rotation:"0", tranformOrigin: "left"})
    .to("#burger > rect:nth-of-type(2)", 0.2, {scaleX:1})
  }


 ngOnInit() {
  }

}

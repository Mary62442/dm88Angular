import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TimelineMax} from 'gsap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor() { }

  menuIsOpen:boolean = false;
  casesMenuIsOpen:boolean = false;

  toggleCasesMenu = ():void => {
    if (this.casesMenuIsOpen) {
      this.casesMenuIsOpen = false;      
      return;
    }
    this.casesMenuIsOpen = true;
    
  }

  toggleMenu = ():void => {
    if (this.menuIsOpen) {
      this.menuIsOpen = false;
      this.fromXMenu();
      return;
    }
    this.menuIsOpen = true;
    this.toXMenu();
  }

  waverMenu = ():void => {
    if (this.menuIsOpen) return;
   
    let waver = new TimelineMax();
  waver.staggerTo("#burger > rect", 0.2, {x:"20px", yoyo:true, repeat:2, ease:"ease-out"},"-0.1")
  .staggerTo("#burger > rect", 0.2, {x:"0",ease:"ease-out"}, "-0.1")
 }  


  toXMenu = ():void => {
    let x = new TimelineMax();
    x.to("#burger > rect:nth-of-type(2)", 0.2, {scaleX:0})
    .to("#burger > rect:first-of-type", 0.2, {rotation:"32deg", y:"-10px", scaleX:"1.1", transformOrigin: "left"})
    .to("#burger > rect:last-of-type", 0.2, {scaleX:"1.1",rotation:"-32deg", transformOrigin: "left"})
  }
  fromXMenu = ():void => {
    let x = new TimelineMax();
    x.to("#burger > rect:first-of-type", 0.2, {rotation:"0", y:"0", scaleX:"1", transformOrigin: "left"})
    .to("#burger > rect:last-of-type", 0.2, {scaleX:"1",rotation:"0", transformOrigin: "left"})
    .to("#burger > rect:nth-of-type(2)", 0.2, {scaleX:1})
  }


 ngOnInit() {
  }
ngAfterViewInit() {
  var compass = new TimelineMax({ease:"linear"});

  compass
    .from("#small-points", 0.5, {scale:0, opacity:0,transformOrigin:"center", ease:Back.easeOut})
    .from("#big-points", 0.5, {scale:0, opacity:0,transformOrigin:"center", ease:Back.easeOut})
    .from("#center", 0.2, {scale:0, transformOrigin:"center", ease:Back.easeOut})
    .from("#rounds", 0.3, {scale:0.7, transformOrigin:"center", opacity:0})

}
}

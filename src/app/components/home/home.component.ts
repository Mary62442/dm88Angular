import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import {TimelineMax} from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('cityOutline') cityOutline: ElementRef;
  constructor() {}
  outline:any; 
  outlineLength:number;
  windowsHaveAppeared:boolean = false;
  outlineHasAppeared:boolean = false;

  ngOnInit() {
    this.outline = this.cityOutline.nativeElement;
    this.outlineLength = this.outline.getTotalLength();
    var windows = new TimelineMax();
    windows.to("#windows1, #windows2, #windows3, #windows4, #windows5, #windows6, #bird1, #bird2", 0, {opacity:0})
    
  }

  windowsAppear = ():void => {
    if(this.windowsHaveAppeared) return;
    this.windowsHaveAppeared = true;
    var windows = new TimelineMax();
    windows.to("#windows1, #windows2, #windows3, #windows4, #windows5, #windows6", 0, {opacity:1})
    .staggerFrom("#windows1 > rect", 0.2, {opacity:0}, '-0.1')
    .staggerFrom("#windows2 > rect", 0.2, {opacity:0}, '-0.1')
    .staggerFrom("#windows3 > rect", 0.2, {opacity:0}, '-0.1')
    .staggerFrom("#windows4 > rect", 0.2, {opacity:0}, '-0.1')
    .staggerFrom("#windows5 > rect", 0.2, {opacity:0}, '-0.1')
    .staggerFrom("#windows6 > rect", 0.2, {opacity:0}, '-0.1')
    .to("#bird1", 0.2, {opacity:1})
    .to("#bird2", 0.2, {opacity:1})
  }
  outlineScroll = ():void => {
    if (this.outlineHasAppeared) return;
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    let drawLength = this.outlineLength * scrollPercentage;
    this.outline.style.strokeDashoffset = this.outlineLength - drawLength;
    
    if (scrollPercentage >= 0.7) {
      this.windowsAppear();
    }

    if (scrollPercentage >= 0.99) {
      this.outline.style.strokeDasharray = "none";
      this.outlineHasAppeared = true;
      
    } 
    else {
      this.outline.style.strokeDasharray = this.outlineLength + ' ' + this.outlineLength;
    }
  }

  ngAfterViewInit() {
    this.outline.style.strokeDasharray = this.outlineLength + ' ' + this.outlineLength;
    this.outline.style.strokeDashoffset = this.outlineLength;
    window.addEventListener("scroll", this.outlineScroll);
  }

  

  ngOnDestroy() {
    window.removeEventListener("scroll", this.outlineScroll)
  }

}

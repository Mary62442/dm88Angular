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

  ngOnInit() {
    this.outline = this.cityOutline.nativeElement;
    this.outlineLength = this.outline.getTotalLength();
  }

  outlineScroll = () => {
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    let drawLength = this.outlineLength * scrollPercentage;
    this.outline.style.strokeDashoffset = this.outlineLength - drawLength;
    
    if (scrollPercentage >= 0.99) {
      this.outline.style.strokeDasharray = "none";
      
    } else {
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

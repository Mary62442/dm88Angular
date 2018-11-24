import { Component, OnInit, AfterViewInit } from '@angular/core';
import {TimelineMax} from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngOnInit() {}

  ngAfterViewInit() {
    var tl = new TimelineMax({ease:"linear"});

    tl
    .from("#small-points", 0.5, {scale:0, opacity:0,transformOrigin:"center", ease:Back.easeOut})
    .from("#big-points", 0.5, {scale:0, opacity:0,transformOrigin:"center", ease:Back.easeOut})
    .from("#center", 0.2, {scale:0, transformOrigin:"center", ease:Back.easeOut})
    .from("#rounds", 0.3, {scale:0.7, transformOrigin:"center", opacity:0})

  }

}

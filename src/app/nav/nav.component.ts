import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  status: boolean = false;
  @ViewChild('list') list;

  constructor() { }

  ngOnInit(): void {
  }
  dothis() {
    // console.log(list.native)
    const dom: HTMLElement = this.list.nativeElement;
    const elements = dom.querySelectorAll('.nav-links li')
    console.log(elements)
  }
  clickEvent() {
    this.status = !this.status;
    const dom: HTMLElement = this.list.nativeElement;
    const elements = dom.querySelectorAll<HTMLElement>('.nav-links li')
    // console.log(elements)     
    elements.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.9s cubic-bezier(0.075, 0.82, 0.165, 1) forwards ${index / 10+
          0.2}s`;

      }
    });

  }

}
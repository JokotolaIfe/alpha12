import { AfterViewInit, Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Theme } from '../../common/theme';
import { ObserveData } from '../../common/observe';
import { stats } from '../../common/constants';

@Component({
  selector: 'app-root',
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements AfterViewInit {
  title: string = 'alpha12';
  colors: any;
  stats = stats;
  sideBarCollapse: boolean = false;
  innerWidth: number = 0;

  constructor(
    public Theme: Theme,
    public observe: ObserveData,
    private el: ElementRef
  ) {
    //on initialization of the application get theme and set color variables
    this.observe.getTheme().subscribe(res => {
      this.colors = this.Theme.COLORS();
      this.setColorVariables(this.colors);
    });
  }

  ngAfterViewInit(): void {
    this.setWidth();
  }

  //listen to window resize, 
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    //on window resize check width and set appropriate margin
    this.setWidth();
    if (this.sideBarCollapse || this.innerWidth < 768) {
      (document as any).getElementById("main").style.marginLeft = "50px";
      this.openNav();
      return;
    }
    this.openNav();
    (document as any).getElementById("main").style.marginLeft = "250px";
  }

  setWidth() {
    //get the current size of the width
    // and assign to a global variable
    this.innerWidth = window.innerWidth;
    //on mobile screens and tabs, close nav but on desktop open nav
    this.innerWidth < 768 ? this.closeNav() : this.openNav();
  }

  // Define dynamic color variables for theme customization
  setColorVariables(colors: { [key: string]: string }) {
    Object.keys(colors).forEach(key => {
      // Apply each property in the object as a CSS variable
      this.el.nativeElement.style.setProperty(`--${key}`, colors[key]);
    });
  }

  openNav() {
    if (this.innerWidth < 768) {
      //open side nav on toglle of the menu icon for mobile
      (document as any).getElementById("mySidenav").style.display = "block";
      //set full width sidenav for mobile
      (document as any).getElementById("mySidenav").style.width = "100%";
      return;
    }
    //open side nav on toglle of the menu icon for desktop
    (document as any).getElementById("mySidenav").style.display = "block";
    //set sidenav width at 250px for desktop;
    (document as any).getElementById("mySidenav").style.width = "250px";
    //margin left at 250px for desktop;
    (document as any).getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    //close nav functionality for mobile
    (document as any).getElementById("mySidenav").style.display = "none";
    (document as any).getElementById("main").style.marginLeft = "0";
  }

  getWidth(id: string) {
    let width = (document as any).getElementById(id).offsetWidth;
    return width;
  }

  doSomething(evt: any) {
    //listen to an event from the sidenav component 
    //on click of collapse menu, set sidebarcollapse to be true or fasle
    this.sideBarCollapse = evt.collapse;
    if (evt.collapse) {
      // On menu collapse, set margin-left to 50px to display icons only, hiding the details.
      (document as any).getElementById("main").style.marginLeft = "50px";
      return;
    }
    if (evt.closeNav) {
      // on click of the close nav icon, call the close navbar function
      this.closeNav();
      return;
    }
    //else set margin left to default
    (document as any).getElementById("main").style.marginLeft = "250px";
  }
}
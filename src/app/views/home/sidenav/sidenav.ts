import { Component, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { navlinks, stats } from "../../../common/constants";
import { Theme } from "../../../common/theme";
import { ObserveData } from "../../../common/observe";
import { Nav } from "../../../common/models";

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.html',
    styleUrl: './sidenav.scss'
})
export class SidenavComponent {
    @Input() colors?: any;
    screenWidth: number = 0;
    sideNavCollapse: boolean = false;
    navlinks: Nav[] = navlinks;
    @Output("doSomething") doSomething: EventEmitter<any> = new EventEmitter();

    constructor(
        public Theme: Theme,
        public observe: ObserveData
    ) {
        this.screenWidth = window.innerWidth;
        this.setDimensions();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.screenWidth = window.innerWidth;
        this.setDimensions()
    }
    changeTheme() {
        var theme_: any = this.Theme.theme === 'light' ? 'dark' : 'light';
        this.observe.setTheme(theme_)
    }

    setDimensions() {

        if (this.screenWidth < 768) {
            this.navlinks = navlinks.filter(el => el.title !== 'Collapse')
            this.sideNavCollapse = false;
            this.doSomething.emit({ collapse: this.sideNavCollapse });
            this.doSomething.emit({ closeNav: true });
        } else {
            this.navlinks = navlinks;
        }
    }

    goTo(item?: Nav) {
        if (item?.title === 'Collapse') {
            this.sideNavCollapse = !this.sideNavCollapse;
            this.doSomething.emit({ collapse: this.sideNavCollapse });
        }
    }

    closeNav() {
        this.doSomething.emit({ closeNav: true });
    }
}
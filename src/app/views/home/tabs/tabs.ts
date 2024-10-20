import { Component } from "@angular/core";
import { Nav } from "../../../common/models";
import { tabs } from "../../../common/constants";

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.html',
    styleUrl: './tabs.scss'
})
export class TabsComponent {
    tabs: Nav[] = tabs
}
import { Component, HostListener, Input } from "@angular/core";
import { extras, tableData } from "../../../common/constants";
import { TableData } from "../../../common/models";

@Component({
    selector: 'app-table',
    templateUrl: './table.html',
    styleUrl: './table.scss'
})
export class TableComponent {
    @Input() colors?: any;
    selectedItem: any;
    currentIndex: number = 0;
    noOfItemsToShow = extras.noOfTableDataToShow;
    tableData: TableData[] = [];
    totalIndexes: number = 0;
    screenWidth = window.innerWidth;
    showModal: boolean = false;

    //on window resize listen to event and set the screenwidth;
    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.screenWidth = window.innerWidth
    }

    constructor() {
        this.showData();
    }

    prev() {
        // decreate index by 1 -- pagination
        this.currentIndex -= 1;
        //then get next data
        this.showData();
    }

    next() {
        // increase index by 1 -- pagination
        this.currentIndex++;
        //then get next data
        this.showData();
    }

    goTo(i: number) {
        //on page select, assign page to a global var;
        this.currentIndex = i;
        // then fetch data
        this.showData();
    }

    showData() {
        //if the no of items to show selected on the ui is larger than the available data, do nothing
        if (this.noOfItemsToShow > tableData.length) return;
        // retrieve the starting index for slicing the data
        const start = (this.noOfItemsToShow * this.currentIndex);
        // retrieve the ending index for slicing the data.
        const end = start + this.noOfItemsToShow;
        //get table data base on the current Index and the no of items to show selected
        this.tableData = tableData.slice(start, end);
        this.totalIndexes = Math.ceil(tableData.length / this.noOfItemsToShow);
    }

    selectItem(item: any, i: number) {
        if (this.screenWidth > 768) {
            //on click on the event name for desktop show modal
            this.showModal = true;
            return;
        }
        //on click on the event name for mobile toglle dropdown to show additional details;
        // and assign it to a global variable
        this.tableData[i].open = !this.tableData[i].open;
        this.selectedItem = this.selectedItem ? null : item;
    }
}
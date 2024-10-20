import { Component, HostListener, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Slide } from "../../../common/models";
import { slides } from "../../../common/constants";

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.html',
    styleUrl: './slider.scss'
})
export class SliderComponent implements OnChanges {
    @Input() colors?: any;
    @Input() width?: any | 0;
    currentIndex?: number = 0;
    showSlider?: boolean;
    customOptions: OwlOptions = {
        loop: true,
        autoplay: true,
        dots: false,
        items: 1,
        autoplayTimeout: 5000,
        autoWidth: true,
        nav: false,
    }

    slides: Slide[] = slides;

    ngOnChanges(changes: SimpleChanges): void {
        setTimeout(() => {
            this.showSlider = true
        }, 400);
    }


    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.showSlider = true
    }

    getPassedData(evt?: any) {
        this.currentIndex = evt.startPosition;
    }
}
import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ChartOptions } from "chart.js";
import { chartDatasets, chartLabels } from "../../../common/constants";

@Component({
    selector: 'app-chart',
    templateUrl: './chart.html',
    styleUrl: './chart.scss'
})
export class ChartComponent implements AfterViewInit, OnChanges {
    @Input() colors?: any;
    public regData: any = {
        labels: chartLabels,
        datasets: [
            {
                backgroundColor: '#8576FF',
                maxBarThickness: 28,
                borderWidth: 0.1,
                data: chartDatasets,
            },
        ],
    };
    labels: any[] = [];
    public barOptions: ChartOptions<"bar"> = {
        responsive: true,
    };

    showChart: boolean = true;
    ngAfterViewInit(): void {
        this.setChart();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.showChart = false;
        this.setChart();
        setTimeout(() => {
            this.showChart = true;
        }, 300);
    }

    setChart() {
        this.barOptions = {
            responsive: true,
            animations: {
                tension: {
                    duration: 1000,
                    easing: "linear",
                    from: 1,
                    to: 0.5,
                    loop: false,
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: this.colors?.priText,
                        font: {
                            family: 'Inter',
                            size: 10,
                            lineHeight: 1
                        },
                    },
                    grid: {
                        lineWidth: 0.2,
                        color: '#FFFFFF',
                    },
                    border: {
                        dash: [2, 4],
                    }
                },
                y: {
                    ticks: {
                        color: this.colors?.priText,
                        font: {
                            family: 'Inter',
                            size: 10,
                            lineHeight: 1
                        },
                        autoSkip: true,
                        maxTicksLimit: 10
                    },
                    grid: {
                        lineWidth: 0.2,
                        color: '#FFFFFF'
                    },
                    border: {
                        dash: [2, 4],
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 10,
                            lineHeight: 4
                        }
                    }
                }

            }
        }

    }

}
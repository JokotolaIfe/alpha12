import { Component, Input } from "@angular/core";
import { stats } from "../../../common/constants";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.html',
  styleUrl: './cards.scss'
})
export class CardsComponent {
  @Input() colors?: any;
  stats = stats;

}
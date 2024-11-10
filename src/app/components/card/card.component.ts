import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // informações do card(principal)
  @Input() gameCover: string = ""
  // informações do card label
  @Input() gameLabel: string = ""
  // informações do card pricing
  @Input() gameType: string = "XPTO | PS4"
  @Input() gamePrice: string = "R$ 399,90"

  constructor() { }

  ngOnInit(): void {
  }

}

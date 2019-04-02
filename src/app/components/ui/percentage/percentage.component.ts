import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.scss']
})

export class PercentageComponent implements OnInit {

  @Input() vote: number;
  voteAttr: string;

  constructor() {}

  ngOnInit() {
    this.voteAttr = this.vote * 10 + ',100';
  }


}

import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.scss']
})

export class PercentageComponent implements OnInit {

  @Input() value: number;
  valueAttr: string;

  constructor() {}

  ngOnInit() {
    this.valueAttr = this.value * 10 + ',100';
  }
}

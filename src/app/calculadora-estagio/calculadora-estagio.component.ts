import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-estagio',
  templateUrl: './calculadora-estagio.component.html',
  styleUrls: ['./calculadora-estagio.component.css']
})
export class CalculadoraEstagioComponent implements OnInit {


  remainingHours: number;
  totalHours: number = 450;
  completedHours: number = 0;
  missedHours: number = 0;

  constructor() { }

  ngOnInit() {
    this.updateRemainingHours();
  }

  changeTotalHours(value) {
    //console.log(value);
    this.totalHours = value;
    this.updateRemainingHours();
  }

  changeCompletedHours(value) {
    this.completedHours = value;
    this.updateRemainingHours();
  }

  updateRemainingHours() {
    this.remainingHours = this.totalHours - this.completedHours;
  }
}

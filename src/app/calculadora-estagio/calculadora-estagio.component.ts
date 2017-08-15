import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-estagio',
  templateUrl: './calculadora-estagio.component.html',
  styleUrls: ['./calculadora-estagio.component.css']
})
export class CalculadoraEstagioComponent implements OnInit {


  private remainingHours: number;
  private totalHours: number = 450;
  private completedHours: number = 0;
  private missedHours: number = 0;

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

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

  updateRemainingHours() {
    var aux = this.totalHours - this.completedHours;

    if(aux >= 0) {
      this.remainingHours = this.totalHours - this.completedHours;
    } else {
      this.remainingHours = 0;
      this.completedHours = this.totalHours;
    }
  }
}

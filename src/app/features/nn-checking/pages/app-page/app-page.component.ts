import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NaturalNumberService } from 'src/app/services/natural-number.service';

@Component({
  selector: 'app-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.scss'],
})
export class AppPageComponent {
  numberInput: FormControl<number>;
  resultNumber: number | null;
  conditionResult: boolean[];
  isResultChecked: boolean;

  limitNumber = 999999999;
  isLimitExceeded = false;

  isNullInput = false;

  constructor(private ns: NaturalNumberService) {
    this.numberInput = new FormControl();
    this.resultNumber = null;
    this.conditionResult = [];
    this.isResultChecked = false;
  }

  checkNumber() {
    this.conditionResult = [];
    this.resultNumber = this.numberInput.value;
    console.log();

    if (
      this.resultNumber > this.limitNumber ||
      this.resultNumber < -this.limitNumber
    ) {
      this.switchContent(1);
    } else if (this.resultNumber === null) {
      this.switchContent(2);
    } else {
      this.switchContent(0);
      this.conditionResult.push(
        this.ns.isInteger(this.resultNumber),
        this.ns.isMoreThanZero(this.resultNumber)
      );
    }
  }

  switchContent(content: number) {
    this.isResultChecked = content === 0;
    this.isLimitExceeded = content === 1;
    this.isNullInput = content === 2;
  }
}

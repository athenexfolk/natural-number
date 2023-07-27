import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NaturalNumberService {
  constructor() {}

  public isNaturalNumber(num: number): boolean {
    return this.isInteger(num) && this.isMoreThanZero(num);
  }

  public isInteger(num: number): boolean {
    return num - Math.floor(num) === 0;
  }

  public isMoreThanZero(num: number): boolean {
    return num > 0;
  }
}

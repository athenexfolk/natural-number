import { Component } from '@angular/core';
import { Link } from 'src/app/models/link';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss'],
})
export class IndexPageComponent {
  basicOp: Link[] = [
    {
      path: 'natural-number-checking',
      name: 'Check',
    },
    {
      path: 'natural-number-comparing',
      name: 'Compare',
    },
    {
      path: 'natural-number-adding',
      name: 'Add',
    },
    {
      path: 'natural-number-subtracting',
      name: 'Subtract',
    },
    {
      path: 'natural-number-multiplying',
      name: 'Multiply',
    },
    {
      path: 'natural-number-dividing',
      name: 'Divide',
    },
  ];

  advanceOp: Link[] = [
    {
      path: 'factor-finding',
      name: 'Find factor',
    },
    {
      path: 'prime-number-checking',
      name: 'Check prime number',
    },
    {
      path: 'composite-number-checking',
      name: 'Check composite number',
    },
    {
      path: 'prime-factor-finding',
      name: 'Find prime factor',
    },
    {
      path: 'prime-factorizing',
      name: 'Prime factorize',
    },
    {
      path: 'common-divisor-finding',
      name: 'Find common divisor',
    },
    {
      path: 'gcd-finding',
      name: 'Find GCD',
    },
    {
      path: 'multiple-finding',
      name: 'Find multiple',
    },
    {
      path: 'common-multiple-finding',
      name: 'Find common multiple',
    },
    {
      path: 'lcm-finding',
      name: 'Find LCM',
    },
    {
      path: 'natural-number-relation-find',
      name: 'Find relation'
    }
  ];
}

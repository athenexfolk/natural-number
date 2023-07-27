import { Component, Input } from '@angular/core';
import { Link } from 'src/app/models/link';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent {
  @Input() link!: Link
}

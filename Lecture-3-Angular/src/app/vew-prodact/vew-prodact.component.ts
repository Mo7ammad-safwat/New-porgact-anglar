import { Component, Input } from '@angular/core';
import { Prodact } from '../prodact';

@Component({
  selector: 'app-vew-prodact',
  templateUrl: './vew-prodact.component.html',
  styleUrl: './vew-prodact.component.scss',
})
export class VewProdactComponent {
 @Input()vewPro!: Prodact;
}

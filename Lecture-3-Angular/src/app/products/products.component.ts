import { Component, EventEmitter, Output,  } from '@angular/core';
import { Prodact } from '../prodact';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  @Output() creatProdact = new EventEmitter<any>();
  selectedFile: File | null = null;

  namProdact = '';
  priceProdact: number = 1224;
  descrbnigProdact = '';

  // دالة لمعالجة اختيار الملف
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  onaddprodact() {
    const formData = new FormData();

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.creatProdact.emit({
      nam: this.namProdact,
      img: this.selectedFile ? URL.createObjectURL(this.selectedFile) : '',
      pris: this.priceProdact,
      des: this.descrbnigProdact,
    });
  }
}

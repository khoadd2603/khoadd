import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../product.model';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent implements OnInit {
  @Input() products: Product[];
  @Output() onChanegeInput = new EventEmitter();
  ngOnInit() {}

  removeProduct(productId: number) {

  }
  @Output() removeProductRa = new EventEmitter();

  setQuantity(productId: number, inputQuanntity: HTMLInputElement) {
    this.onChanegeInput.emit({ID:productId, SL: inputQuanntity.value});
  }
  onremoveProduct(productId: number){ //truyen dl ra
    this.removeProductRa.emit(productId);
  }
}

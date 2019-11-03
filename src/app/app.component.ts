import { Component } from "@angular/core";
import { Product } from "./product.model";
import { ProductService } from './product.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "shopping-cart";
  constructor(public productService: ProductService){

  }
  ngOnInit() {
    this.products = this.productService.getAll();
    this.products.forEach((myObject, index) => {
      //alert(myObject.quantity.toString());
      this.totalItems = this.totalItems + Number(myObject.quantity);

      this.sotien += Number(myObject.quantity) * Number(myObject.price);
    });
    this.tongtien = this.sotien + this.tax;
    this.thamso =
      '{"SOTIEN":' +
      this.sotien +
      ',"TONGTIEN":' +
      this.tongtien +
      ',"THUE":' +
      this.tax +
      "}";
  }
  thamso: string;
  products: Product[] ;

  removeProduct(productId: number) {
    this.products = this.productService.removeProduct(productId);
    this.totalItems = 0;
    this.sotien = 0;
    this.tongtien = 0;
    this.products.forEach((myObject, index) => {
      //alert(myObject.quantity.toString());
      this.totalItems = this.totalItems + Number(myObject.quantity);
      this.sotien =
        this.sotien + Number(myObject.quantity) * Number(myObject.price);
    });
    this.tongtien = this.sotien + this.tax;
    this.thamso =
      '{"SOTIEN":' +
      this.sotien +
      ',"TONGTIEN":' +
      this.tongtien +
      ',"THUE":' +
      this.tax +
      "}";
  }
  totalItems: number = 0;
  tax: number = 17;
  tongtien: number = 0;
  sotien: number = 0;

  setQuantity(obj: { ID: number; SL: number }) {
    //var obj = JSON.parse(quan);
    //alert('thay doi san pham ' + obj.ID + ' so luong ' + obj.SL);
    // const product = this.products.find(product => product.id === obj.ID);
    // product.quantity = obj.SL;
    //const index = this.products.findIndex(product => product.id === obj.ID);
    this.products = this.productService.setQuantity(obj.ID, obj.SL);
    this.totalItems = 0;
    this.sotien = 0;
    this.tongtien = 0;
    this.products.forEach((myObject, index) => {
      //alert(myObject.quantity.toString());
      this.totalItems = this.totalItems + Number(myObject.quantity);
      this.sotien =
        this.sotien + Number(myObject.quantity) * Number(myObject.price);
    });
    this.tongtien = this.sotien + this.tax;
    this.thamso =
      '{"SOTIEN":' +
      this.sotien +
      ',"TONGTIEN":' +
      this.tongtien +
      ',"THUE":' +
      this.tax +
      "}";
    //alert(this.thamso);
  }
}

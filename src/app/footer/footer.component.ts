import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit, DoCheck {

  constructor() { }
  @Input() thamso: string;
  sotien: number=0;
  tongtien: number=0;
  thue: number=0;
  ngOnInit() {

  }
  ngDoCheck(){
    var obj = JSON.parse(this.thamso);
    //alert('check' + this.thamso);
    this.sotien= obj.SOTIEN;

    this.thue = this.sotien*0.1
    this.tongtien = this.sotien + this.thue;
  }
}

import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/_models/Iproduct';

@Component({
  selector: 'app-prduct-details',
  templateUrl: './prduct-details.component.html',
  styleUrls: ['./prduct-details.component.css']
})
export class PrductDetailsComponent implements OnInit {
  // filteredName = " f";

  products: IProduct[] = [{
    name: "leaf Rake",
    code: "gdn-0011",
    avalible: new Date("2021,3,19"),
    price: "19.95",
    image: "./../../../assets/images/leafRake.jpg"
  }, {
    name: "garden cart",
    code: "gdn-0023",
    avalible: new Date("2021,3,18"),
    price: "32.99",
    image: "./../../../assets/images/garden Cart.jpg"
  }, {
    name: "hammer",
    code: "tbx-0048",
    avalible: new Date("2021,5,21"),
    price: "8.90",
    image: "./../../../assets/images/hammer.jpg"
  }, {
    name: "saw",
    code: "tbx-0022",
    avalible: new Date("2021,5,15"),
    price: "11.55",
    image: "./../../../assets/images/saw.jpg"
  }, {
    name: "video game controller",
    code: "gmg-0042",
    avalible: new Date("2020,10,15"),
    price: "35.95",
    image: "./../../../assets/images/video game controller.jpg"
  }];

  flag = true;
  name: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  show() {
    this.flag = !this.flag;
  }

}

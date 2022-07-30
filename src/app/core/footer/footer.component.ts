import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  name: string = "uhjikyui";
  constructor() { }

  ngOnInit(): void {
  }
  save(event: any) {

    this.name = event;
  }
}

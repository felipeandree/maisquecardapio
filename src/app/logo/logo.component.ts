import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  title: string = 'Logo';
  description: String = "Logo do Banner"
  constructor() {}

  ngOnInit() {}
}

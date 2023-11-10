import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-cardapio',
  templateUrl: './banner-cardapio.component.html',
  styleUrls: ['./banner-cardapio.component.scss']
})
export class BannerCardapioComponent {

  title: string = 'bannerCardapio';
  description: String = "Banner do Cardápio"
  constructor() {}

  ngOnInit() {}
}

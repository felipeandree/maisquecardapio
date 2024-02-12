import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss']
})

export class FoodMenuComponent implements OnInit {
  dadosApi: any;

  constructor(private _produtosService: ProdutosService) { }

  ngOnInit() {
    this._produtosService.getDadosApi().then(response => {
      this.dadosApi = response.data;
    }).catch(error => {
      console.error("Erro ao obter dados da API", error);
    });
  }
}
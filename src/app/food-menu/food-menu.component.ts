import { Component } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss']
})
export class FoodMenuComponent {
  menuItems = [
    {
      name: 'Frango Teriaki',
      description: 'Delicioso feito com coxas de frango gengibre e shoyu',
      price: 16.00
    },
    {
      name: 'Pasteis de queijo',
      description: 'Porção de pastel',
      price: 16.00
    },
    {
      name: 'BBQ Bacon',
      description: 'Pão de hamburguer 150g, quejo prato, molho barbecue, bacon...',
      price: 35.99
    }
  ];
}

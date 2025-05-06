import { Component } from '@angular/core';
import { FooterComponent } from "../common/footer/footer.component";
import { HeaderComponent } from "../common/header/header.component";
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  featuredProducts = [
    {
      name: 'Wireless Headphones',
      description: 'Noise-cancelling with 40-hour battery life.',
      price: 99.99,
      stock: 12,
      image: 'https://via.placeholder.com/300x200.png?text=Headphones'
    },
    {
      name: 'Smart Watch',
      description: 'Track fitness and get notifications instantly.',
      price: 149.99,
      stock: 8,
      image: 'https://via.placeholder.com/300x200.png?text=Smart+Watch'
    },
    {
      name: 'RGB Gaming Mouse',
      description: 'Ergonomic design with customizable lighting.',
      price: 59.99,
      stock: 20,
      image: 'https://via.placeholder.com/300x200.png?text=Gaming+Mouse'
    },
    {
      name: 'Portable Bluetooth Speaker',
      description: 'Deep bass, compact design, long battery life.',
      price: 79.99,
      stock: 15,
      image: 'https://via.placeholder.com/300x200.png?text=Speaker'
    }
  ];

}

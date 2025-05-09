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
      id: 1,
      name: 'Wireless Headphones',
      description: 'Noise-cancelling over-ear headphones with 30h battery life.',
      price: 129.99,
      image: 'https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983_640.jpg',
      stock: 12,
      seller: 'TechStore Inc.',
      ratings: 4.5,
      comments: ['Great sound!', 'Very comfortable.', 'Battery lasts long.']
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

  openProductDetails(product: any) {
    const productWindow = window.open(
      `/product-details?id=${product.id}`,
      '_blank'
    );
  }

}

import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgFor, NgClass, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  product: any;
  newMessage: string = '';
  chatMessages: { user: string; text: string }[] = [];

  allProducts = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'Noise-cancelling over-ear headphones with 30h battery life.',
      price: 129.99,
      image: 'https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983_640.jpg',
      stock: 12,
      supplier: {
        name: 'TechStore Inc.',
        email: 'support@techstore.com'
      },
      ratings: 4.5,
      comments: ['Great sound!', 'Very comfortable.', 'Battery lasts long.']
    },
    // More products...
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.queryParamMap.get('id'));
    this.product = this.allProducts.find(p => p.id === id);
  }

  contactSupplier() {
    alert(`Opening contact message to: ${this.product.supplier.email}`);
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.chatMessages.push({ user: 'You', text: this.newMessage });
      this.newMessage = '';
      // In a real app, you'd connect this to a real chat system or backend.
    }
  }
}

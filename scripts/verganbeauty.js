import {cart} from '../data/cart.js';
import { products } from '../data/products.js';
import { services } from '../data/services.js';

let servicesHTML = ''

services.forEach(service => {
    servicesHTML += `
   <div class="service-card">
          <img src="${service.image}" alt="profesional braiding" loading="lazy">
          <h3>${service.name}</h3>
          <p>${service.description}</p>
          <ul>
            <li class="primary-btn"><a href="#" >Pricing System</a></li>
          </ul>
        </div>
    `;
})

document.querySelector('.js-service-collection').innerHTML = servicesHTML;

let productsHTML = ''

products.forEach(product => {
    productsHTML += `
    <div class="product-card">
          <div class="product-img">
          <img src="${product.image}" loading="lazy">
        </div>
        <div class="product-info">

          <h3>${product.name}</h3>
          <p>${product.description}</p>
        </div>
        <div class="product-footer">
         <div class="product-rating-container">
            <img class="product-rating-stars"
              src="assets/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
            </div>
        <div class="product-price">
          <div class="amount">${product.price}</div>
          <div class="increment">
          <input placeholder="1">
          <button>&plus;</button>
        </div>
        </div>
          <div class="product-link">
          <ul>
            <li class="primary-btn js-add-to-cart" data-product-name="${product.name}">Add to Cart</li>
          </ul>
          </div>
        </div>
      </div>
    `;
})

document.querySelector('.js-shop-collection').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart')
.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.dataset.productName

        let matchingItem;
        cart.forEach(item => {
            if(productName === item.productName){
                matchingItem = item
            }
        });

        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            cart.push({
                productName: productName,
                quantity: 1
            });
        }

        let cartQuantity = 0;

        cart.forEach(item => {
            cartQuantity += item.quantity;
        });

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
         console.log(cartQuantity)
    console.log(cart);
      });
});

import {cart} from '../data/cart.js';

const services = [{
    image: 'assets/hero_images/mohamed-b-O1W2ZYGxFPA-unsplash.jpg',
    name: 'Hair Braiding',
    description: 'Expert braiding services including box braids, cornrows, natural hair twist and more. Each style crafted with precition and care'
},
{
    image: 'assets/hero_images/istockphoto-526947125-612x612-1.jpg',
    name: 'Custom Crochet',
    description: 'Handmade crochet items made to order.From clothing to accesories, I create pieces that reflect your unique style.'
},
{
    image: 'assets/hero_images/maria-kovalets-JEaKy0cP4OM-unsplash.jpg',
    name: 'Ready-Made Shop',
    description: 'Browse my collection of ready-to-deliver crochet items. Beautiful, handcrafted pieces available for immediate purchase'
}
]

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

const products = [{
    image: 'assets/products/crochet-scarf.png',
    name: 'Crochet Scarf',
    description: 'soft,warm, and stylish. Perfect for the cold season',
    rating: {
        stars: 4.5,
        count: 50
    },
    price: 'FCFA 8000'
},
{
    image: 'assets/products/crochet-crop-top.png',
    name: 'Crochet Crop Top',
    description: 'Trendy and comfortable for summer vibes',
    rating: {
        stars: 5,
        count: 500
    },
    price: 'FCFA 4000'
},
{
    image: 'assets/products/crochet-earing.png',
    name: 'Crochet Earing',
    description: 'Look classy and unique',
    rating: {
        stars: 4,
        count: 200
    },
    price: 'FCFA 2000'
},
{
    image: 'assets/products/baby-set2.png',
    name: 'Baby set',
    description: 'Keep your baby feeling warm, cozy, protected and happy',
    rating: {
        stars: 5,
        count: 100
    },
    price: 'FCFA 20000'
},
{
    image: 'assets/products/crochet-beach-wear.png',
    name: 'Beach Wear',
    description: 'Who\'s ready to hit the beach. I tailor your beach wears for your comfort, boosting your confidence to the max.',
    rating: {
        stars: 4,
        count: 60
    },
    price: 'FCFA 10000'
}
]

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

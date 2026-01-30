export const cart = [];

export function addToCart (productName) {

     let matchingCartItem;
        cart.forEach(cartItem => {
            if(productName === cartItem.productName){
                matchingCartItem = cartItem
            }
        });

        if (matchingCartItem) {
            matchingCartItem.quantity += 1;
        } else {
            cart.push({
                productName: productName,
                quantity: 1
            });
        }

}
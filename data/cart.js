export const cart = [{
    productId: '3d0a5e98-1f6b-4a77-b9c4-2e8f71a6d5c0',
    quantity: 2,
},
{
    productId: '5e2b1a9c-7f6d-48a0-9c3e-4b8d6f1a7025',
    quantity: 1,
}];

export function addToCart (productId) {

     let matchingCartItem;
        cart.forEach(cartItem => {
            if(productId === cartItem.productId){
                matchingCartItem = cartItem
            }
        });

        if (matchingCartItem) {
            matchingCartItem.quantity += 1;
        } else {
            cart.push({
                productId: productId,
                quantity: 1
            });
        }

}
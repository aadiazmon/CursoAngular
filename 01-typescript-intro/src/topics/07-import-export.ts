import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: "Nokia",
        price: 150.0
    },
    {
        description: "iPad",
        price: 250.0
    }
];

const tax = 0.15;

const [totalCart, totalTax] = taxCalculation({
    products: shoppingCart,
    tax: tax
});

console.log(`Total: ${totalCart} | Total tasas: ${totalTax}`);
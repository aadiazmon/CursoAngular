export interface Product {
    description: string;
    price: number;
};

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
};

const phone: Product = {
    description: "Nokia",
    price: 150.0
};

const tablet: Product = {
    description: "iPad",
    price: 250.0
};

//const taxCalculation = ( options: TaxCalculationOptions ): [number, number] => {
//const taxCalculation = ( {products, tax}: TaxCalculationOptions ): [number, number] => {
export const taxCalculation = (options: TaxCalculationOptions): [number, number] => {
    const {products, tax} = options;

    let total = 0;

    products.forEach(({price}) => {
        total += price;
    });

    return [total, total * tax];
};

/*
const shoppingCart = [phone, tablet];
const tax = 0.15;

const [totalCart, totalTax] = taxCalculation({
    products: shoppingCart,
    tax: tax
});

console.log(`Total: ${totalCart} | Total tasas: ${totalTax}`);
*/
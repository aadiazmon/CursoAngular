function sumNumbers(a: number, b:number): number {
    return (a + b);
};

const sumNumbersArrow = (a: number, b:number): string => {
    return `${a + b}`;
};

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
};

const result: number = sumNumbers(1, 2);
const resultArrow: string = sumNumbersArrow(1, 2);
const resultMultiply: number = multiply(5);

console.log({result, resultArrow, resultMultiply});

interface Personaje {
    nombre: string;
    vida: number;
    mostrarVida: () => void;
};

const curarPersonaje = (personaje: Personaje, cantidad: number) => {
    personaje.vida += cantidad;
};

const personaje: Personaje = {
    nombre: "Alejandro",
    vida: 100,
    mostrarVida() {
        console.log(`Puntos de vida: ${this.vida}`);
    }
};

personaje.mostrarVida();
curarPersonaje(personaje, 100);
personaje.mostrarVida();

export {};
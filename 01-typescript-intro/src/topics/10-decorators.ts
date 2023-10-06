function classDecorator<T extends {new (...args:any[]): {}}>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "New property";
        hello = "override";
    };
};

@classDecorator
export class SuperClass {
    public myProperty: string = "ABC123";

    print() {
        console.log("Hola mundo");
    };
};

const superClass = new SuperClass();

console.log(SuperClass);
console.log(superClass);
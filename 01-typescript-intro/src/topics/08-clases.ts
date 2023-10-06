export class Person {
    //public name: string;
    //private address: string;

    constructor(
        public name: string,
        private address: string = "No address"
    ) {
        this.name = name;
        this.address = address;
    };
};

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         realName: string
//     ){
//         super(realName);
//     };
// };

export class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public person: Person
    ){};
};

const person = new Person("Tony", "New York");
const ironman = new Hero("IronMan", 45, person);

console.log(ironman);
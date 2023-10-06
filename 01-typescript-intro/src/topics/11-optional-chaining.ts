export interface Passenger {
    name: string;
    childrens?: string[];
};

const passengerOne: Passenger = {
    name: "Alejandro"
};

const passengerTwo: Passenger = {
    name: "Guadalupe",
    childrens: ["Pepita", "Pepito"]
};

const printChildrens = (passenger: Passenger): void => {
    const {childrens:totalChildrens, name:passengerName} = passenger

    console.log(`Pasajero: ${passengerName} | Número de hijos: ${totalChildrens?.length || 0}`);
};

printChildrens(passengerOne);
printChildrens(passengerTwo);
interface Personaje {
    nombre: string;
    vida: number;
    habilidades: string[];
    despertar?: string;
}

const personaje: Personaje = {
    nombre: "Alejandro",
    vida: 100,
    habilidades: ["Atacar", "defender", "Curar"]
};

personaje.despertar = "Revivir";

console.table(personaje);

export{};
export enum Color {
  Azul,
  Negro,
  Rojo,
  Verde
}

export interface Hero {
  name:string;
  canFly:boolean;
  color: Color
}

import { Type } from './type.enum';

export class Product {
    id: number;
    name: string;
    type: Type;
    price: number;
    description: string;
    isSecondHand: boolean;
    photoLinks: string[];

    constructor(id: number, name: string, type: Type, price: number, description: string, isSecondHand: boolean, photoLinks: string[]) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.description = description;
        this.isSecondHand = isSecondHand;
        this.photoLinks = photoLinks;
    }
}

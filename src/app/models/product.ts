export class Product {
    name: string;
    price: number;
    description: string;
    date: Date;

    constructor(name: string, price: number, description: string) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.date = new Date();
    }
}

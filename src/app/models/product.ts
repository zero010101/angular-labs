export class Product {
    name: string;
    description: string;

    constructor(name: string = 'some name', description: string = 'some text') {
        this.name = name;
        this.description = description;
    }
}

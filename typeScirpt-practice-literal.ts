interface  Car2{
    name: string;
    start(): void;
}

interface Toy{
    name: string;
    color: string;
    price: number;
}

const toyCar: Toy& Car2={
    name:"타요",

    start() {},
    color:"blue",
    price:1000,
}
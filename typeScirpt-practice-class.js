"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(color) {
        //#은 private 대신사용가능
        //protected 자식클레스만사용가능 private 자신만 가능
        this.name = "car";
        this.color = color;
    }
    start() {
        console.log("start");
        console.log(this.name);
    }
}
class Bmw extends Car {
    constructor(color) {
        super(color);
    }
    showName() {
        console.log(super.name);
    }
}
const z4 = new Bmw("black");
console.log(z4.name);

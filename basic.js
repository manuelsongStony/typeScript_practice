let 이름 = 'kim';
let 이름유니온 = 'kim';
let 이름어레이 = ['kim', "sam"];
let 이름오브젝트 = { name: 'kim' }; //{}
function 함수(x) {
    return x * 2;
}
함수(123);
let john = [123, true];
let walker = { name: 'kim', age: '123', "st": '123' };
class User {
    constructor(name) {
        this.name = name;
    }
}
let user = {
    name: 'xx',
    age: 30,
    birthYear: 2000,
    1: 'A',
    2: 'B'
};
user.age = 10;
user.gender = 'male';
console.log(user.age);
const add = function (x, y) {
    return x + y;
};
class Bmw {
    constructor(c) {
        this.wheels = 4;
        this.color = c;
    }
    start() {
        console.log('go..');
    }
}
const b = new Bmw('green');
console.log(b);
b.start();
const benz = {
    door: 5,
    stop() {
        console.log('stop');
    },
    color: "black",
    wheels: 4,
    start() { }
};

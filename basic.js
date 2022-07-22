var 이름 = 'kim';
var 이름유니온 = 'kim';
var 이름어레이 = ['kim', "sam"];
var 이름오브젝트 = { name: 'kim' }; //{}
function 함수(x) {
    return x * 2;
}
함수(123);
var john = [123, true];
var walker = { name: 'kim', age: '123', "st": '123' };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var user = {
    name: 'xx',
    age: 30,
    birthYear: 2000,
    1: 'A',
    2: 'B'
};
user.age = 10;
user.gender = 'male';
console.log(user.age);
var add = function (x, y) {
    return x + y;
};
var Bmw = /** @class */ (function () {
    function Bmw(c) {
        this.wheels = 4;
        this.color = c;
    }
    Bmw.prototype.start = function () {
        console.log('go..');
    };
    return Bmw;
}());
var b = new Bmw('green');
console.log(b);
b.start();
var benz = {
    door: 5,
    stop: function () {
        console.log('stop');
    },
    color: "black",
    wheels: 4,
    start: function () { }
};

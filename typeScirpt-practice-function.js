function hello(name) {
    return "Hello, ".concat(name || "world");
}
function hello2(name) {
    if (name === void 0) { name = "world"; }
    return "Hello, ".concat(name);
}
var result = hello();
var result2 = hello("sam");
console.log(result2);
function add2() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (result, num) { return result + num; }, 0);
}
add2(1, 2, 3);
var Sam = { name: 'Sam' };
function showName(age, gender) {
    console.log(this.name, age, gender);
}
var a = showName.bind(Sam);
a(30, 'm');

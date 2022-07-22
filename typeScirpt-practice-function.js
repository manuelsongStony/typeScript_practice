function hello(name) {
    return `Hello, ${name || "world"}`;
}
function hello2(name = "world") {
    return `Hello, ${name}`;
}
const result = hello();
const result2 = hello("sam");
console.log(result2);
function add2(...nums) {
    return nums.reduce((result, num) => result + num, 0);
}
add2(1, 2, 3);
const Sam = { name: 'Sam' };
function showName(age, gender) {
    console.log(this.name, age, gender);
}
const a = showName.bind(Sam);
a(30, 'm');

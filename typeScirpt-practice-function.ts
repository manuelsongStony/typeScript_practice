function hello(name?: string){
    return `Hello, ${name||"world"}`;
}
function hello2(name="world") {
    return `Hello, ${name }`;
} 
const result =hello();
const result2 =hello("sam");

console.log(result2)

function add2(...nums:number[]){
    return nums.reduce((result,num)=>result+num,0);
}

add2(1,2,3);

interface User2{
    name: string;
}

const Sam: User2={name:'Sam'}

function showName(this:User,age:number, gender: 'm'|'f'){
    console.log(this.name,age,gender)
}

const a =showName.bind(Sam);
a(30,'m'); 

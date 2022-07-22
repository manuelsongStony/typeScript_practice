let 이름 :string= 'kim';
let 이름유니온 :string | number= 'kim';
let 이름어레이  :string[]= ['kim',"sam"];
let 이름오브젝트  :{name? : string}= {name:'kim'};//{}

type 내타입 = string| number;

function 함수(x: number):number{
    return x*2
}

함수(123)

type Member =[number,boolean];
let john:Member=[123,true];

type Member_set = {
    [key : string] : string,
}

let walker: Member_set ={name : 'kim',age:'123',"st":'123'}


class User{
    name: string;
    constructor(name : string){
        this.name=name;
    }
}

type Score= 'A'| 'B'|'C'|'F';
interface User{
    name: string;
    age: number;
    gender?: string;
    readonly birthYear: number;
    [grade:number]:Score;
}
let user : User={
    name: 'xx',
    age:30,
    birthYear:2000,
    1: 'A',
    2: 'B'
}

user.age=10;
user.gender='male'
console.log(user.age)

interface Add{
    (num1:number,num2:number): number;  
}

const add :Add =function(x,y){
    return x+y;
}


interface Car{
    color:string;
    wheels:number;
    start(): void;
}

class Bmw implements Car{
    color;
    wheels=4;
    constructor(c:string){
        this.color=c;
    }
    start(): void {
        console.log('go..')
    }
}

interface Benz extends Car{
    door:number;
    stop()  :void;

}

const b =new Bmw('green')
console.log(b)
b.start();

const benz :Benz = {
    door: 5,
    stop() {
        console.log('stop');
    },
    color: "black",
    wheels: 4,
    start(){}
}


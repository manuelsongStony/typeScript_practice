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


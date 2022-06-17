class User{
    // 생성자에서 변수
    constructor(name){
        console.log("생성자");
        this.name = name;
    }

    sayHi(){
        console.log(this.name, this.age);
    }
};

let user = new User("Tom");
user.sayHi();
user.age = 12;
console.log(user.age);
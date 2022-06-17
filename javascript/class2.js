class Animal{
    constructor(name=""){
        this.speed=0;
        this.name=name;
    }

    run(speed){
        this.speed = speed;
        console.log(`${this.name}이/가 속도 ${this.speed}로 달립니다.`);
    }

    stop(){
        this.speed=0;
        console.log(`${this.name}이/가 멈췄습니다.`);
    }
}

class Rabbit extends Animal{
    hide(){
        console.log(`${this.name}이/가 숨었습니다.`);
    }

    stop(){
        super.stop(); // 부모의 stop함수를 호출한다.
        this.hide();
    }
}

let rabbit = new Rabbit("흰토끼");
rabbit.run(5);
rabbit.stop();

console.log(rabbit);
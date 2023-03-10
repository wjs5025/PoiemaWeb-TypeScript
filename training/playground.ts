// 정적 타이핑
function func(num: number, num2: number): boolean {
  return num === num2;
}
func(5, 5);

// 객체도 타입이 될 수 있다.
let objectStr: String;
objectStr = "hello";
objectStr = new String("hello");

// 타입 추론
let value = 4; // value는 number

// 타입캐스팅
const $input = document.querySelector('input["type="text"]');
// $input : Element | null

// 클래스
class Student {
  constructor(name: string) {
    console.log(name);
  }

  static staticMethod() {
    return "Method";
  }

  prototypeMethod() {
    return "Proto";
  }
}

const student = new Student("Jeon");
// console.log(student.name); // error : student 에는 name 프로퍼티가 없음.

// 정적 메소드

console.log(Student.staticMethod());

const student2 = new Student("Jeon");
// console.log(student2.staticMethod()); // error : 정적메소드이므로 인스턴스로 호출할 수 없다.
// console.log(Student.prototypeMethod()); // error

// 인터페이스
interface SquareFunc {
  (num: number): number;
}

const squareFunc: SquareFunc = function (num: number) {
  return num * num;
};

const squareFunc_arrow: SquareFunc = (num: number) => {
  return num * num;
};

// 클래스에서의 인터페이스
interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

class Todo implements ITodo {
  constructor(
    public id: number,
    public content: string,
    public completed: boolean
  ) {}
}

const todo = new Todo(1, "TS", false);
console.log(todo);

// 인터페이스 추상메소드 구현
interface IStudent {
  name: string;
  sayHello(): void;
}

class NewStudent implements IStudent {
  constructor(public name: string) {}

  sayHello(): void {
    console.log(`Hello ${this.name}`);
  }
}

const me = new NewStudent("Jeon");
me.sayHello();

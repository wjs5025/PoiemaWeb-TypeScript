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

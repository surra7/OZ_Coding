// 4. 제네릭

// Array 제네릭
let numbers: Array<number> = [1, 2, 3, 4, 5];
let strings: Array<string> = ["1", "2", "3", "4", "5"];

// let div = document.querySelector<HTMLDivElement>("#myDiv1");
// let button = document.querySelector<HTMLButtonElement>("#myButton1");

// button이 null일 수도 있으므로 ?로 체크를 해줘야함 
// button?.click();

function getFirstElement<T>(arr: T[]): T | undefined {
    if (!arr.length) {
        return undefined;
    }
    return arr[0];
}
const firstNumber = getFirstElement(numbers);
const firstString = getFirstElement(strings);


// interface에 제네릭 -> key와 value가 있는 객체에서 value의 타입을 다양하게 정의하기 위해
interface Dict<T>{
    [key: string]: T
}

interface Entry<K, V> {
    key: K;
    value: V;
}

let entry: Entry<string, number> = {
    key: "age",
    value: 30
}

let entry2: Entry<number, string[]> = {
    key: 1,
    value: ['red', 'blue', 'green']
}

// interface strDict {
//     [key: string]: string;
// }

let strObj: Dict<string> = {
    name: "Elliot"
}

// interface numDict {
//     [key: string]: number;
// }

let numobj: Dict<number> = {
    age: 30
}
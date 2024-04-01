// 4. 제네릭
// Array 제네릭
var numbers = [1, 2, 3, 4, 5];
var strings = ["1", "2", "3", "4", "5"];
// let div = document.querySelector<HTMLDivElement>("#myDiv1");
// let button = document.querySelector<HTMLButtonElement>("#myButton1");
// button이 null일 수도 있으므로 ?로 체크를 해줘야함 
// button?.click();
function getFirstElement(arr) {
    if (!arr.length) {
        return undefined;
    }
    return arr[0];
}
var firstNumber = getFirstElement(numbers);
var firstString = getFirstElement(strings);
var entry = {
    key: "age",
    value: 30
};
var entry2 = {
    key: 1,
    value: ['red', 'blue', 'green']
};
// interface strDict {
//     [key: string]: string;
// }
var strObj = {
    name: "Elliot"
};
// interface numDict {
//     [key: string]: number;
// }
var numobj = {
    age: 30
};

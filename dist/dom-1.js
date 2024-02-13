// 4-1. DOM
// JS에서 제공되는 모든 DOM API를 그대로 사용가능
// 타입 정의 파일 제공 'lib.dom.d.ts' 알아서 타입 체킹을 해줌
// <a id="myLink" href="https://google.com"> google </a>
var link1 = document.getElementById('myLink'); // HTMLElement | null
var link2 = document.querySelector('#myLink'); // Element | null
// link1이 HTMLAnchorElement인지 확인하기
if (link1 instanceof HTMLAnchorElement) {
    link1.href = "";
}
// 타입 단언 사용하기 
link2.href = "";
// 설정한 태그 이름에 맞는 HTML 요소가 자동 반환됨 -> HTMLImageElement
var img = document.createElement('img');
img.src = "";
var div = document.querySelector('div'); // -> HTMLDivElement | null
var buttons = document.querySelectorAll('button'); // -> NodeListOf<HTMLButtonElement>
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        console.log(button.id);
    });
});
var myDiv = document.getElementById('myDiv');
myDiv === null || myDiv === void 0 ? void 0 : myDiv.addEventListener('click', function (e) {
    if (e instanceof MouseEvent) {
        var x = e.clientX;
        var y = e.clientY;
    }
    if (e instanceof KeyboardEvent) {
        console.log(e.code);
    }
});

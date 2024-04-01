// 5-4. 타입 선언 파일 (타입 정의 파일)

// .d.ts 의 확장자를 가짐
// 자바스크립트 내장 객체, 또는 외부 라이브러리 API 등을 설명하는 파일
// 실제 구현을 제공하지 않고 특정 타입이 존재한다는 것을 선언하는 것이 목적

// .ts -> 구현 코드, .d.ts -> 타입정보만 포함

// console.log('hello typescript');

// 콘솔이라는 객체에는 print라는 메소드는 없음
// 내장 객체 확인하는 방법: ctrl(command) + 마우스 클릭
// console.print('hello');


// 실무에서 일반적으로 타입 정의 파일을 사용하는 경우 -> 외부 API, 라이브러리를 사용할 때
// lodash -> 자바스크립트에서 필요한 유용한 함수들을 제공하는 유틸리티 라이브러리, 설치 후 사용
// 터미널: npm i --save lodash

import _ from "lodash";
// 문제점: 현재는 타입 정보가 없음 전부 any 타입
// -> 1. 직접 타입 선언 파일을 생성
// -> 2. 라이브러리에서 제공하는 타입 정의 파일를 따로 설치, 터미널: nmp i --save @types/lodash

let max = _.max([3, 5, 7, 1, 2, 6, 2]);
console.log(max);

let shuffledArray = _.shuffle([12, 3, 5, 1, 6]);
console.log(shuffledArray);


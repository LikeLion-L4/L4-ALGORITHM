//
//63
//todo 친해지고 싶어
// 한국 대학교의 김한국 교수님은 학생들과 친해지기 위해서 딸에게 줄임말을 배우기로 했습니다.
// 딸은 '**복잡한 세상 편하게 살자**'라는 문장을 '**복세편살**'로 줄여 말합니다.
// 교수님이 줄임말을 배우기 위해 아래와 같이 **어떤 입력이 주어지면 앞 글자만 줄여 출력**하도록 해주세요.
// 입력은 한글 혹은 영어로 입력되며, 띄어쓰기를 기준으로 하여 짧은 형태로 출력합니다.

//* 입력
// 복잡한 세상 편하게 살자
//* 출력
// 복세편살

// let input = prompt('줄일 문장을 입력하세요');
// let input = '복잡한 세상 편하게 살자';
// let inputArr = input.split(' ');
// let answer = '';
// for (let a of inputArr) {
//   answer += a[0];
// }
// console.log(answer);

//
//64
//todo 이상한 엘레베이터
// 정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
// 화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.
// 예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
// 7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.

// **입력**
// 정량 N이 입력됩니다.
// **출력**
// 가장 적게 옮길 수 있는 횟수를 출력합니다.
// 만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.

// let input = parseInt(prompt('정량을 입력해주세요'));
// // let input = 24;
// let temp = input;
// let n = 0;
// let flag = 0;
// let answer;

// while (temp - 7 > 0) {
//   temp -= 7;
//   n++;
// }

// for (let i = n; i > 0; i--) {
//   let mod = input - 7 * i;
//   if (mod % 3 === 0) {
//     flag++;
//     answer = i + parseInt(mod / 3);
//     break;
//   }
// }

// flag === 0 ? console.log(-1) : console.log(answer);

//
//65
//todo 변형된 리스트
// a = [1, 2, 3, 4]
// b = [a, b, c, d]
// 이런 리스트가 있을 때
// [[1, a], [b, 2], [3, c], [d, 4]] 이런 식으로
// a, b 리스트가 번갈아가면서 출력되게 해주세요

// let a = [1, 2, 3, 4];
// let b = ['a', 'b', 'c', 'd'];
// let arr = [];
// for (let i in a) {
//   let tempArr = [a[i], b[i]];
//   arr.push(tempArr);
// }
// console.log(arr);

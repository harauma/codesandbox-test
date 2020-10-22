/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

//const
// const val3 = "const変数";
// console.log(val3);

//const変数は上書き不可
//val3 = "const変数を上書き";

// const val3 = "const変数を再宣言"

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "hoge",
//   age: 22,
// }
// console.log(val4);
// val4.name = "fuga";
// val4.address = "japan";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = 'bard';
// val5.push('monkey');
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "hoge";
// const age = 22;
// //「私の名前はhogeです。年齢は22歳です。」

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
// console.log(func1("func1です"));

//アロー関数
const func2 = (str) => str;
// console.log(func2("func2です"));

const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "hoge",
//   age: 22
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["hoge", 22];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値,引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん！`);
// sayHello();

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const array1 = [1, 2];
// console.log(array1);
// console.log(...array1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(array1[0], array1[1]);
// sumFunc(...array1);

//まとめる
// const array2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...array3] = array2;
// console.log(num1);
// console.log(num2);
// console.log(array3);

//配列のコピー、結合
// const array4 = [10, 20];
// const array5 = [30, 40];

// const array6 = [...array4];
// array6[0] = 100;
// console.log(array6);
// console.log(array4);

// const array7 = [...array4, ...array5];
// console.log(array7)

// const array8 = array4;
// console.log(array8);
// array8[0] = 100;
// console.log(array4)

/**
 * mapやfilterを使った配列の処理
 */
//従来のやり方
const nameArr = ["田中", "山田", "hoge"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "hoge") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
//　ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています！！' : '許容範囲内です';
// }
// console.log(checkSum(50,50));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flg1 = true;
// const flg2 = false;

// if (flg1 || flg2) {
//   console.log("1か2はtrueになります");
// }
// if (flg1 && flg2) {
//   console.log("1も2もtrueになります");
// }

// ||は左側がfalseとなら右を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);

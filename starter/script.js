// // "use strict";

// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log( `i can drive` );

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} and ${oranges} oranges.`;
//   return juice ;
//   }
//   const appleJuice = fruitProcessor(5, 10);
//   console.log (appleJuice);

// function calcAge1(birthYear) {
//   return 2037- birthYear ;
// }
//  const age1 = calcAge1(1991);
//  console.log(age1);

//  const calcAge2 = function (birthYear) {
//   return 2037 - birthYear ;
//   }
//   const age2 = calcAge2(1991)

//   console.log(age1, age2);


//calculate average, arrow function

// const calcAverage = (a,  b, c) => (a + b + c)/3;

// console.log(calcAverage);

// //calculate averagage for each team, feer the arguments

// const scoreDolphins = calcAverage(23,44,56);
// const scoreKoala = calcAverage(45, 22,36);

// // console.log(averageDolphins,averageKoala);

// //check condition

// const checkWinner = function(averageDolphins, averageKoala) {
//   if(averageDolphins >= averageKoala*2) {
//     console.log(`Dolphins won with ${averageDolphins}points`);
//   } else if (averageKoala >= averageDolphins*2) {
//     console.log(`Koala won with ${averageKoala}points`);
//   }else {
//     console.log(`Nobody won`)}
//   }

//   //call the function

//   checkWinner(scoreDolphins, scoreKoala);

// const calcTip = function(bill) {
//   return bill<=50 && bill< 200 ? 0.015*bill :0.02*bill;
// }

// const bills = [1312, 34234, 423];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);


// const jonas = {
//   firstName: `jonas`,
//   lastName: `tom`,
//   friends:[`Michael`, `Peter`],
//   job: `teacher`,
//   }


  // console.log(jonas.lastName);
  // console.log(jonas[`lastName`]);

  // const nameKey = `Name`;
  // console.log(jonas[`first`+ nameKey]);
  // console.log(jonas[`last`+ nameKey]);

  // const interestedIn = prompt ("What do you know about Jhonas? Choose between firstname, lastName,age, job and friends");
  // console.log(jonas[interestedIn]);

  // if(jonas[interestedIn]){
  //   console.log(jonas[interestedIn]);
  //   }else{
  //   console.log("Wrong Request")}

  //   jonas.location = `Portugal`;
  //   jonas[`twitter`]= `@jonasschemyueg`;
  //   console.log(jonas);


  // console.log(`${jonas.firstName} has ${jonas.friends.lenght} friends, but he s best friend is ${jonas.friends[0]}`)



  // const jonas = {
  //   firstName: `Jonas`,
  //   lastName: `Tom`,
  //   birthYear: 1991,
  //   job: `teacher`,
  //   friends: [`Michael`, `Jon`],
  //   hasDriversLicence: true,
  //   calcAge: function(){
  //    this.age = 2037-this.birthYear;
  //    return this.age;}
  //   }

  //   console.log(jonas.calcAge());

  //   console.log(`${jonas.firstName} is a ${jonas.age} years old, and he ${ jonas.hasDriversLicence? `has`: `does not have`} a driving licencmark


//  const mark = {
//     fullName: 'Mark Smith',
//     height: 1.67,
//     mass: 67,
//     calcBmi: function() {
//       this.bmi = this.height/this.mass;
//       return this.bmi;
//     },
//  };

//  mark.calcBmi()
// console.log(mark.bmi)

//  const john = {
//     fullName: "John Doe",
//     height: 2.10,
//     mass: 80,
//     calcBmi: function() {
//       this.bmi = this.height/this.mass;
//       return this.bmi;
//     },
//  }

//  john.calcBmi()
//  console.log(john.bmi)


//  if (mark.bmi > john.bmi) {
//   console.log("mark is bigger than jogn");
//  }else{
// console.log("John is bigger than mark")};


// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`${rep} lifting is ok`);
//   };

//   for (let rep = 1; rep <= 30; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
//   }

// types = [];

// const jonas = [
//   `Jhonas`,
//   `Smith`,
//   2037-1233,
//   `teacher`,
//   [`Michael`,`Thomas`, `steven`]
//   ];
//   for(let i =0; i< jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i]);
//     types[i] =typeof jonas[i];
//     }
//   console.log(types);

// const years = [1234, 4475, 4535]
// const ages = [];
// for (let i =0; i<years.length; i ++){
// ages.push(2037-years[i]);
// }
// console.log(ages);

// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ];

//   for ( let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
//   }

//   for ( let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
//   }

// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ];

for (let i = jonas.length -1; i >= 0; i--){
  console.log(i, jonas[i]);
}


for (let exercise = 1; exercise< 4; exercise ++){
  console.log(`----Starting exercise--------${exercise}`);
  for (let rep =1; rep <6; rep++) {
    console.log(`Lifting weight exercise ${rep}`)
  }

}


while loop
let rep1 = 1;
while (rep1 <=10) {
  console.log(`go home`);
  rep1++;
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random()*6) +1
console.log(dice);

while (dice !==6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random()*6) +1;
  if(dice ===6 )console.log(`Loop is about to end...`);
}


bills = [1213, 12341324, 3431, 543, 53, 25, 4543, 542, 5262, 2626, 2626, 435];
tips = [];
totals = [];

const calcTip = function(bill) {
  if (bill<=50 && bill< 200) {
      return 0.015*bill
  }else{
   return 0.02*bill
  };
}


for ( let i = 0; i < bills.length; i++ ){
tips.push(calcTip(bills[i]))
}
console.log(tips);

for ( let i = 0; i < bills.length; i++ ){
  totals.push(Number(tips[i])+ Number(bills[i]))
  }
  console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i=0; i< arr.length; i++) {
    sum += arr[i];

  }
  console.log(sum);
  return sum/sum.length;
}
 console.log(calcAverage([2,3,45,5]));

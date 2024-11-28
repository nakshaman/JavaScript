// fullName="Naksh aman";
// console.log(fullName);
// isFollow=true;
// console.log(isFollow);
// fullName="Aman Kumar";
// console.log(fullName);
// console.log(typeof(fullName));
// let y=Symbol("!Hello!");
// console.log(y);

// const student={
//     fullName: "Aman Kumar",
//     age: 24,
//     cgpa:8.4,
//     isPass:true,
// };
// console.log(student.fullName)

// const product={
//     productName: "Macbook M2",
//     rating : 5,
//     isDeal:false,
//     price: 82000,
// };
// const profile={
//     username:"shradha",
//     isVerified:true,
//     posts:195,
//     followers:200,
//     followed:198,
//     fullName:"Shradha Khapra",
//     bio:"Apna college",
// }

// let a=4;
// let b=5;
// console.log("a+b",a+b);

// let a=5;
// let b="5";
// console.log("a=b is ",a===b);
// alert("Hello world");
// let x=prompt("Enter the number");
// if(x%5===0){
//     console.log("Yes it is multiple of 5");
// }
// else{
//     console.log("No it is not multiple of 5");

// let grade=prompt("Enter the marks:");
// if(grade>=0 &&  grade<=49){
//     console.log("F\n");
// }
// else if(grade>=50 && grade<=59){
//     console.log("D\n");
// }
// else if(grade>=60 && grade<=69){
//     console.log("C\n");
// }
// else if(grade>=70 && grade<79){
//     console.log("B\n");
// }
// else if(grade>=80 && grade<=100){
//     console.log("A\n");
// }


// let x=prompt("Enter the number N");
// let sum=0;
// for(let i=1;i<=x;i++){
//     sum+=i;
// }
// console.log(sum);

// let student={
//     fullName:"Naksh aman",
//     isPass:true,
//     cgpa:9.8,
//     age:24,
// };
// for(let i in student){
//     console.log("i",i,"value ",student[i]);
// }


// for(let i=1;i<=100;i++){
//     if(i%2===0){
//         console.log(i,"is even");
//     }
//     else{
//         console.log(i,"is odd");
//     }
// }

// let num=Math.floor(Math.random()*100);
// let count=1;
// let inp=parseInt(prompt("Enter the number between 0-100:"));
// while(num!==inp){
//     if(inp>num){
//         console.log("Guess lower number");
//         count++;
//     }
//     else if(inp<num){
//         console.log("Guess bigger number");
//         count++;
//     }
//     inp=parseInt(prompt("Enter the number:"));
// }
// console.log("You guesed the correct number in ",count,"attempts");
// console.log(`You guesed the correct number in ${count} attempts`); //this string is created through template
// // literals


// let v="Naksh";
// let newV=v.replace("N","K");
// console.log(newV);

// let fullName=prompt("Enter your fullname");
// let l=fullName.length;
// let newName="@"+fullName+l;
// console.log(newName);

// let arr=[85,97,44,37,76,60];
// let sum=0;
// for(let i of arr){
//     sum+=i;
// }
// console.log(sum/arr.length);

// let arr=[250,645,300,900,50];
// for(let i=0;i<arr.length;i++){
//     let offerMoney=(arr[i]/100)*10;
//     arr[i]=arr[i]-offerMoney;
// }
// for(let i of arr){
//     console.log(i);
// }


// let company=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// // company.splice(0,1);
// // company.splice(2,1,"Ola");
// company.push("Amazon");
// console.log(company);



// function greet(){
//     console.log("Hello world");
// }
// greet();

function add(a,b){
    console.log(a+b);
}
add(3,4);
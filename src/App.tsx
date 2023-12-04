import './App.css'

function App() {
 let age=10;
 let score=0;
 let username : string ="";
 let isAdmin=false;
 const n : number =5;
 const numbers = [1,2,3,4,5,6,7,8,9,10,11];
 const doupleNumbers=numbers.map(num=>num*2);
 const words = ["a","ab","abc","abcd","abcde","abcdef","abcdefg"];
 const longerThanFive=words.filter(word=>word.length>5);
 const sumOfAll=numbers.reduce((accumulator,currentValue)=>{
     return accumulator+currentValue;
 },0);
 const greaterThanTen=numbers.some(num=> num > 10);

 for(let i=1; i<=age; i++){
     console.log(i);
 }

 if(age<=18){
     console.log("you're a minor.");
 }else{
     console.log("you're an adult.");
 }

 if(score!=0){
     console.log("Score is available.");
 }else{
     console.log("Score is not available.");
 }

 if(score){
     console.log("Score is evaluated as truthy.");
 }else {
     console.log("Score is evaluated as falsy.");
 }

 if(username===null){
     console.log("Username is not available.");
 }else{
     console.log("Username is available.");
 }

 if(username){
     console.log("Username is evaluated as truthy.");
 }else {
     console.log("Username is evaluated as falsy.");
 }

 if(isAdmin){
     console.log("isAdmin is evaluated as truthy.");
 }else{
     console.log("isAdmin is evaluated as falsy.");
 }

 if(isAdmin===false){
     console.log("isAdmin is false.");
 }

 for(let i:number=1; i<=n; i++){
     let space=" ".repeat(n-i);
     let star="*".repeat(i*2-1);
     console.log(space+star+space);
 }
 for(let i:number=1; i<=n; i++){
     // let space=" ".repeat(n-1);
     // let star="*";
     // console.log(space+star);
     console.log(' '.repeat(n - 1) + '*');
 }
  return (
    <>
        <h1>Results:</h1>
        <h2>{doupleNumbers}</h2>
        <h2>{longerThanFive}</h2>
        <h2>{sumOfAll}</h2>
        <h3>{greaterThanTen ? 'At least one number is greater than 10' : 'No number is greater than 10'}</h3>

    </>
  )
}

export default App

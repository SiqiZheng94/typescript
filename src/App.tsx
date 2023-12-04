import './App.css'

function App() {
 let age=18;
 let score=0;
 let username : string ="";
 let isAdmin=false;
 const n : number =5;

 for(let i=1; i<=age; i++){
     console.log(i);
     // printAge=i;
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

    </>
  )
}

export default App

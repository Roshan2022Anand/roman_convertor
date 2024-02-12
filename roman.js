//accesing all the element from the HTML document
const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const ansDisplay = document.getElementById("output");
//making an object of roman symbols
const romanSymbols = {
    M :	1000,
    CM :	900,
    D :	500,
    CD : 400,
    C :	100,
    XC :	90,
    L	: 50,
    XL : 40,
    X : 10,
    IX : 9,
    V	: 5,
    IV : 4,
    I : 1
}
convertBtn.addEventListener("click" , ()=>{
  let number = Number(userInput.value);
  let remainingNum = number;
  let romanNumber = "";
    
  if(userInput.value == ""){
    ansDisplay.innerText = "Please enter a valid number";
  }else if(number <= 0){
    ansDisplay.innerText = "Please enter a number greater than or equal to 1";
  }else if(number >= 4000){
    ansDisplay.innerText = "Please enter a number less than or equal to 3999";
  }else{
    const convertToRoman=()=>{
      for(let num in romanSymbols){
        if(remainingNum >= romanSymbols[num]){
          remainingNum -= romanSymbols[num];
          romanNumber += num;
          convertToRoman();
        if(remainingNum <= 0){
          ansDisplay.innerText = romanNumber;
          return;
        }
      }
    }
  }
    convertToRoman();
  }
})
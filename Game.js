const computerChoiceDisplay = document.getElementById('ComputerChoice');
const UserChoiceDisplay = document.getElementById('UserChoice');
const Result = document.document.getElementById('Result');
const possibleChoice = querySelectorAll('button');
let MyChoice
button.array.forEach(possibleChoice=>possibleChoice.addEventListner('click',(e)=>{
     MyChoice = e.Target.id
     UserChoiceDisplay.innerHTML = MyChoice 
    
}));

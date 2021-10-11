// select document Elementments
const myMessage=document.getElementById("message");
const myError=document.getElementById("error");
const myText=document.getElementById("phrase");
const button=document.getElementById("check_btn");
button.addEventListener("click",()=>{


if(myText.value==""){
  myError.textContent='please enter a word or phrase'

}
else{
  myError.textContent=" ";
  palidromechecker(myText.value);
}
})



function palidromechecker(str){
    const word=str.toLowerCase();
    const letter=str.split('');
    const reverse=letter.reverse();
    const joinedarray=reverse.join('')
    const letter1=joinedarray.toLowerCase();
    if (word==letter1){
    myMessage.textContent=`${word} is a palindrome`;
    myMessage.classList.add("success");
    myMessage.classList.remove("success")
    }
    else{
      
      myMessage.textContent=`${word} is not a palindrome`;
      myMessage.classList.add("error");
      myMessage.classList.remove("error")
    }
}


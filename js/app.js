const startButton = document.getElementsByClassName('btn__reset');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const ul = document.getElementsByTagName('ul')[0];
const qwertyBtns = document.getElementsByTagName('button');
const heartImg =document.getElementsByTagName('img');
const loseScreen = document.getElementsByClassName('lose');
const winScreen =document.getElementsByClassName('win');
const show = document.getElementsByClassName('show');
const letter = document.getElementsByClassName('letter');


let missed = 0;

let phrases = [
  "someday your prince charming will come",
  "people say nothing is impossible",
  "if you cant beat them arrange to have them beaten",
  "cheer up the worst is yet to come",
  "he who laughs last did not get it"
];



function getRandomPhraseAsArray (phrases){

      let randomNumber = Math.floor(Math.random()*5);

      let randomPhrase = phrases[randomNumber];
    //takes a phrase from the phrases array and divides it into its own array of single letters
      var arrayOfStrings = randomPhrase.split("");
        return arrayOfStrings;
};

function addPhraseToDisplay(){
  // do stuff any arr that is passed in, and add to `#phrase ul`
  const phraseArray = getRandomPhraseAsArray(phrases);

  for(let i = 0; i < phraseArray.length; i++)
    {
      let li = document.createElement('li');
      li.innerHTML = phraseArray[i];
      ul.appendChild(li);
      li.classList.add('letter');

      if(li.textContent == " "){
        li.classList.add('space');
        li.classList.remove('letter');
      }
      else{
        li.textContent.display ="none";
      }
    }
};

//const phraseArray = getRandomPhraseAsArray(phrases);
//addPhraseToDisplay(phraseArray);

function checkLetter(btnText){
    let phraseList = document.getElementsByClassName('letter');
    let check = false;
    for (let i = 0; i < phraseList.length; i++)
    {
      if (btnText === phraseList[i].innerHTML)
      {
        phraseList[i].style.opacity ="1";
        phraseList[i].classList.add('show');
        check = true;
      }
    };
    return check;
};

//event listener for the keyboard
//pass letter to checkLetter function
//store inside of variable letterFound

//if checkLetter returns null
//remove a life and increase missed count

function keyboardFunction(){
  for (let i = 0; i < qwertyBtns.length; i++){
    qwertyBtns[i].addEventListener("click", () =>{
      let letterFound = qwertyBtns[i].textContent;
      checkLetter(letterFound);
      qwertyBtns[i].classList.add('chosen');

      if(checkLetter(letterFound) == false)
      {
        missed++;
        console.log(missed);
      }

      if (missed == 1)
      {
        heartImg[0].style.display ="none";
      }
      else if (missed ==2)
      {
        heartImg[1].style.display ="none"
      }
      else if (missed ==3)
      {
        heartImg[2].style.display ="none"
      }
      else if (missed ==4)
      {
        heartImg[3].style.display ="none"
      }
      else if (missed ==5)
      {
        heartImg[4].style.display ="none"
      }
      checkWin();
    });
  };
}

function resetGame(i, id){

    startButton[i].addEventListener("click", () =>{
      ul.innerHTML ="";

      for (let i =0; i < qwertyBtns.length; i++)
      {
        qwertyBtns[i].classList.remove("chosen");
      }

      addPhraseToDisplay();
      document.getElementById(id).style.display = 'none';
      missed = 0;


      for(let i =0; i < heartImg.length; i++)
      {
        heartImg[i].style.display ="flex";
      }
    })

}

//create a checkWin funciton
function checkWin(){
  if (missed ==5){
  loseScreen[0].style.display ="flex";
  resetGame(2,'loseScreen');
  }
  else if(show.length == letter.length)
  {
    winScreen[0].style.display ="flex";
    resetGame(1, 'winScreen');
  }
};


//Game Start
startButton[0].addEventListener("click", () =>{
  addPhraseToDisplay();
  document.getElementById('overlay').style.display = 'none';
});

keyboardFunction();

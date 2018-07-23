/**********SHOWS OVERLAY AFTER PRESSING START GAME***********/
let list=document.querySelector("#phrase ul");
let start_game = document.querySelector(".btn__reset");
let start_screen = document.querySelector("#overlay");
start_game.addEventListener('click',()=>{
	start_screen.style.display="none";
});

let qwerty=document.querySelector("#qwerty");
let phrase=document.querySelector("#phrase");
let missed=0;

/************PHRASE ARRAY********************/
let phrases=[
			'The quick brown fox jumps over a lazy dog',
			'Pack my box with five dozen liquor jugs',
			'The five boxing wizards jump quickly',
			'Jackdaws love my big sphinx of quartz',
			'No gains without pain'
			];

/***************GENERATING RANDOM PHRASE*************/			
function getRandomPhraseAsArray(arr)
{
	let char_array;
	var random_phrase_index = Math.floor(Math.random()*5);
	let splited_word_arr = arr[random_phrase_index].split(" "); // Spitting a random phrase into words
	for(let i=0; i < splited_word_arr.length ;i++)
	{
	char_array=  splited_word_arr[i].split(''); //Spitting the word into characters
	//console.log(char_array);
	}
	return char_array;
	
}

			
let splited_char = getRandomPhraseAsArray(phrases);

//console.log(splited_char);
function addPhraseToDisplay(arr)
{
	for(let i=0;i<arr.length;i++)
	{
		var node = document.createElement("LI");  // Create a <li> node
		node.textContent=arr[i];  
		list.appendChild(node);           // Append the <li> to ul
		//console.log(node.textContent);
		if(node.textContent == " ")
		{
			node.classList.add("space");
			//console.log('its space character');
		}	
		else
			node.classList.add("letter");
		
	}
	
}
addPhraseToDisplay(splited_char);

function checkLetter(button_letter)
{
	let found_letter= button_letter;
	let phrase_letter=document.getElementsByClassName("letter");
	//phrase_letter= phrase_letter.toLowerCase();
	//let button_content = button_letter.textContent
	for(i=0; i < phrase_letter.length ;i++)
	{
		if(button_letter == phrase_letter[i])
		phrase_letter[i].classList.add("show");
		
	}
	if( found_letter)
		return found_letter;
	else return null;

	
}
qwerty.addEventListener('click',(event)=>{
	if(event.target.tagName=="button")
	{
		event.target.classList.add("chosen");
		event.target.setAttribute("disabled",true);
	}
	let letterFound = checkLetter(event.target.textContent);
	console.log(letterFound);
});




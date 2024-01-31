// create the character chards for the page 
let divContainer = document.getElementById('character-cards')
let styleClass =  document.getElementsByClassName('style')
let styleButton = document.getElementById('style-button')
let form = document.getElementById('ricknmorty-form')
let resetButton = document.getElementById('reset-button')
// add a event listener that listens for a dble click and when a dble click event is triggered an alert is supossed to pop up and say this character has been likeed( this being the targeted character card )
// function for event listener 
//for loop function that creates the character cards 
//create a submit event listner for every cahracter card that filters the and tries to finds the specific they were in 
// or have a submt event listner that filter the characters by episode and displays the first 5-10 on the screen 
//fucntion for event listener 
//going to have to reset the div and then innerText = '' and then adjust it to show what characters where in the episode
// on every card there will be a list showing the episodes they were in and will have a scroll event listener 
// use it as an event listner for the smallDiv portion and create it and style it in the css 
//function for event listener 
// so instead of an event listener for scroll do a copy and the header of the small div will say copy and paste into the search bar and it will fetch the episode that was inputted and display all the characters from said episode 
//add buttons and label them properly, name them accordingly 
// the buttons should go into the card as a click event listner 
// or a fullscreen
// so new idea is to have it be like a link 


// call the function to create the character cards
createCharacterCards()



// functions 
function createCharacterCards(){
    fetch('https://rickandmortyapi.com/api/character')
       .then((response) => {return response.json()})
       .then((data) => {
        let characterArray = data.results;
        console.log(characterArray)
        characterArray.forEach(createCharacterCard)
        // characterArray.forEach((character) => createCharacterCard(character))
       })
   
    styleButton.addEventListener('click',(e) => changeBackgroundImage(e))
    form.addEventListener('submit',(e) => {
        submitListener(e)
    })
    resetButton.addEventListener('click', (e) => resetButtonListener(e))
}

function createCharacterCard(character){

    let cardDiv = document.createElement('div')
    let h2 = document.createElement('h2')
    let img = document.createElement('img')
    let smallDiv = document.createElement('div')
    let p = document.createElement('p')
    let li = document.createElement('li')

    h2.innerText = `${character.name}`
    img.classList.add('character-img')
    img.setAttribute('src',`${character.image}`)
    img.setAttribute('id',`${character.name}`)
    cardDiv.classList.add('card')
    smallDiv.classList.add('scroll-div')
    p.classList.add('para')
        for(const ep of character.episode){
            let ul = document.createElement('ul')
            let li = document.createElement('li')
            ul.appendChild(li)
            li.innerText = ep;
            p.appendChild(ul)
        }
    smallDiv.appendChild(p)
    cardDiv.appendChild(img)
    cardDiv.appendChild(h2)
    cardDiv.appendChild(smallDiv)

    divContainer.append(cardDiv)
    console.log(character)

    cardDiv.addEventListener('dblclick',(e) => {
            setInterval(alert(`${character.name} has been liked`),1500)
        })
}

function changeBackgroundImage(e){
    let wholePage = document.getElementsByClassName('whole-page')
    let bodys = document.getElementById('body')
    // bodys.classList.add('differentPage')
    // bodys.classList.add('thirdPage')
    if(bodys.classList[0] === 'whole-page'){
        bodys.classList.replace('whole-page','differentPage')
    } else if(bodys.classList[0] === 'differentPage'){
        bodys.classList.replace('differentPage','thirdPage')
    } else if(bodys.classList[0] === 'thirdPage'){
        bodys.classList.replace('thirdPage','whole-page')
    }
}




function submitListener(e){
    e.preventDefault()
    let inputValue = document.getElementById('input-text').value
    fetch(`https://rickandmortyapi.com/api/episode/${inputValue}`)
    .then((res) => { return res.json()})
    .then((fetchData) => {
        let characterArr = fetchData.characters
        characterArr.forEach(createSubmitListener)
        console.log(characterArr)
    })
    console.log(inputValue)
}



function createSubmitListener(characterURL){

    divContainer.innerHTML = ""
    fetch(characterURL)
    .then((response3) => {return response3.json()})
    .then((data3) => {
        let cardDiv = document.createElement('div')
        let h2 = document.createElement('h2')
        let img = document.createElement('img')

        h2.innerText = `${data3.name}`
        img.classList.add('character-img')
        img.setAttribute('src',`${data3.image}`)
        img.setAttribute('id',`${data3.name}`)
        cardDiv.classList.add('card')
    
        h2.style.color = "black";
        img.style.height = "35rem";
        cardDiv.appendChild(img)
        cardDiv.appendChild(h2)

        divContainer.append(cardDiv)

    cardDiv.addEventListener('dblclick',(e) => {
    setInterval(alert(`${data3.name} has been liked`),1500)
            })
        })
    form.reset()
}

function resetButtonListener(e){
    divContainer.innerHTML = ""
    createCharacterCards()
}


